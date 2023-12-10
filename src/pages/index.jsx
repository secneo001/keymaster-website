import { Feature, FeatureSmall } from "components/features";
import Layout from "components/layout";
import useGitHubRepoData from "hooks/useGitHubRepoData";
import React, { useEffect, useRef, useState } from "react";
import { IoCloudOffline } from "react-icons/io5";
import { FaKeyboard } from "react-icons/fa";
import { PiDetectiveFill } from "react-icons/pi";
import { PiShieldCheckeredFill } from "react-icons/pi";
import { TbZoomCheck } from "react-icons/tb";
import { GrClearOption } from "react-icons/gr";



import { Button, CloseButton, Col, Container, Row, Toast, ToastBody, ToastHeader } from "react-bootstrap";
import {
    ArrowClockwise,
    BracesAsterisk,
    ChevronLeft,
    ChevronRight,
    CreditCardFill,
    DatabaseFillLock,
    Github,
    GooglePlay,
} from "react-bootstrap-icons";
import { CommonPageTitle } from "components/pageTitles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { StatusButtonDownload } from "components/statusButton";

const features = [
    { title: "Always offline", description: "Securely stores all your data on your own device locally, Sensuring privacy and control.", icon: <IoCloudOffline /> },
    { title: "Secure storage", description: "Technique to securely with random key encrypt and decrypt data.", icon: <DatabaseFillLock /> },
    { title: "Secure input", description: "Built-in secure soft keyboard to protect your password input security.", icon: <FaKeyboard /> },
    { title: "Runtime protect", description: "Built-in runtime security protection capabilities (RASP) to prevent malicious code injection and memory dump from stealing your data.", icon: <PiShieldCheckeredFill /> },
    { title: "Privacy protect", description: "Prevent screenshots and recordings, and safely clears the remaining data on the clipboard.", icon: <PiDetectiveFill /> },
    { title: "Self Destory", description: "Self-destruct and delete all your data securely when an intruder is trying to be nosy.", icon: <GrClearOption /> },
    { title: "Password Generator", description: "A tool that creates strong and random passwords based on specific criteria.", icon: <ArrowClockwise /> },
    { title: "Password Estimator", description: "Provides an estimate of how secure the password is against potential attacks.", icon: <TbZoomCheck /> },
]

const elements = [
    { title: "Passwords", description: "Say goodbye to forgotten passwords and compromised security! Protect your valuable accounts with this password manager.", icon: <BracesAsterisk /> },
    { title: "Credit Cards", description: "Securely store and protect your credit card information, ensuring convenience and peace of mind in a single solution.", icon: <CreditCardFill /> },
]


const PasswordManager = ({ data }) => {
    const { projectData, loading, error } = useGitHubRepoData("keymaster-apk")

    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(error)
    }, [error])

    const containerRef = useRef(null);
    const [initialIndex, setInitialIndex] = useState(0)
    const [leftVisible, setLeftVisible] = useState(false)
    const [rightVisible, setRightVisible] = useState(false)


    const scrollRight = () => {
        const container = containerRef.current;
        const { left, right } = container.getBoundingClientRect();
        const imagesList = container.children;

        for (let i = initialIndex; i < imagesList.length; i++) {
            const image = imagesList[i];
            const rect = image.getBoundingClientRect();


            if (!(rect.left >= left && rect.right <= right)) {
                image.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" })
                break;
            }
        }
    };

    const scrollLeft = () => {
        const container = containerRef.current;
        const { left, right } = container.getBoundingClientRect();
        const imagesList = container.children;

        for (let i = initialIndex; i >= 0; i--) {
            const image = imagesList[i];
            const rect = image.getBoundingClientRect();

            if (!(rect.left >= left && rect.right <= right)) {
                image.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" })
                break;
            }
        }
    };


    useEffect(() => {
        // define an observer instance
        var observer = new IntersectionObserver(onIntersection, {
            threshold: 1 // percentage of target's visible area. Triggers "onIntersection"
        })

        // callback is called on intersection change
        function onIntersection(entries, opts) {
            const { target, isIntersecting } = entries[0]

            if (!isIntersecting) {
                return
            }

            let index = [...containerRef.current.children].indexOf(target)
            setInitialIndex(index)
            if (index === containerRef.current.children.length - 1) {
                updateButtons()
            }
        }

        const images = containerRef.current.children;
        for (let i = 0; i < images.length; i++) {
            observer.observe(images[i])
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    const updateButtons = () => {
        const container = containerRef.current
        setRightVisible(container.scrollLeft !== container.scrollWidth - container.offsetWidth)
        setLeftVisible(container.scrollLeft > 0)
    }

    const [imageData, setImageData] = useState(null)

    const openImage = index => {
        document.body.style.overflow = index >= 0 ? 'hidden' : ''
        if (index < 0) {
            setImageData(null)
            document.removeEventListener("keyup", keyEvent)
            return
        }
        const nodes = data.allFile.nodes;
        setImageData({
            image: getImage(nodes[index]),
            prev: index > 0 && index - 1,
            next: index < nodes.length - 1 && index + 1
        })
    }

    const keyEvent = evt => {
        if (evt.key === 'Escape') {
            openImage(-1)
        }
    }

    return (
        <Layout projectData={projectData} >
            <CommonPageTitle title={"KeyMaster - Password Vault"} description={"A free password manager - a reliable solution prioritizing transparency, security and privacy. Utilizing AES algorithm with random key to encrypt and secure database to store, your sensitive information stays confidential and safeguarded."} >
                <Col className="d-flex flex-column gap-2 work-box">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center align-items-center">
                        <StatusButtonDownload text="Download stable APK" projectData={projectData} loading={loading} error={error} />
                    </div>
                </Col>
            </CommonPageTitle>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-gradient">Features</h2>
                    <Row xs={1} sm={2} lg={4} className="g-4 py-5" data-aos="fade-up">
                        {
                            features.map((feature, i) => (
                                <Feature key={i} title={feature.title} description={feature.description} icon={feature.icon} />
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-gradient">What can be saved?</h2>
                    <Row xs="1" md="2" className="align-items-md-center g-5 py-5">
                        <Col className="d-flex flex-column align-items-start gap-2" data-aos="fade-right">
                            <h3 className="fw-bold">Secure Elements</h3>
                            <p className="text-body-secondary text-justify">Ensuring the utmost security for your sensitive information, this password manager employs robust encryption protocols to safeguard your passwords and credit card details. With the encryption database stored directly on your device, you can trust that your data remains in your control, away from prying eyes and potential online threats. Enjoy the peace of mind that comes with knowing your personal information is protected by advanced encryption technology, providing a secure vault for your passwords and credit card information.</p>
                        </Col>
                        <Col data-aos="fade-left">
                            <Row xs="1" sm="2" className="g-4">
                                {
                                    elements.map((element, i) => (
                                        <FeatureSmall key={i} title={element.title} description={element.description} icon={element.icon} />
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container className="px-4">
                    <h2 className="pb-2 border-bottom border-gradient" id="images">App page</h2>
                    <div className="position-relative justify-content-center">
                        <Row className="overflow-x-scroll g-2 flex-nowrap m-0" ref={containerRef} onScroll={updateButtons} style={{ scrollSnapType: "x mandatory" }}>
                            {
                                data.allFile.nodes.map((image, index) => (
                                    <Col key={index} style={{ scrollSnapAlign: "start", cursor: "pointer" }} onClick={e => openImage(index)}>
                                        <GatsbyImage image={getImage(image)} style={{ minWidth: 200 }} className="rounded-3" alt={`${image.relativeDirectory} screenshot`} />
                                    </Col>
                                ))
                            }
                        </Row>

                        <Button variant="dark" className={`position-absolute d-none ${leftVisible ? 'd-xl-inline-flex' : ''} align-items-center justify-content-center rounded-circle fs-5`} style={{ width: "56px", height: "56px", top: "calc(50% - 28px)", left: "-28px" }} onClick={scrollLeft}>
                            <span className="d-inline-flex align-items-center justify-content-center">
                                <ChevronLeft />
                            </span>
                        </Button>
                        <Button variant="dark" className={`position-absolute d-none ${rightVisible ? 'd-xl-inline-flex' : ''} align-items-center justify-content-center rounded-circle fs-5`} style={{ width: "56px", height: "56px", top: "calc(50% - 28px)", right: "-28px" }} onClick={scrollRight}>
                            <span className="d-inline-flex align-items-center justify-content-center">
                                <ChevronRight />
                            </span>
                        </Button>
                    </div>
                </Container>
            </section>

            {imageData && (
                <div className="position-fixed top-0 left-0 w-100 h-100">
                    <script>
                        {
                            document.addEventListener('keyup', keyEvent)
                        }
                    </script>
                    <div className="d-flex align-items-center justify-content-center h-100 w-100 position-relative">
                        <div className="position-absolute top-0 left-0 w-100 h-100" style={{ background: "rgba(0, 0, 0, .5)" }} role="none" onClick={() => openImage(-1)}></div>
                        <div className="position-relative" style={{ maxHeight: "90%", maxWidth: "80%", aspectRatio: 9 / 16 }}>
                            <GatsbyImage image={imageData.image} className="rounded-3" alt="Image Viewer" />
                            <CloseButton className="position-absolute top-0 end-0 p-3" onClick={() => openImage(-1)} />

                            {
                                imageData.next && (
                                    <div className="position-absolute" style={{ width: "56px", height: "56px", top: "calc(50% - 28px)", right: "-86px" }}>
                                        <Button variant="dark" className="h-100 w-100 d-flex align-items-center justify-content-center rounded-circle fs-4" onClick={() => openImage(imageData.next)}>
                                            <ChevronRight />
                                        </Button>
                                    </div>
                                )
                            }


                            {
                                (imageData.prev || imageData.prev === 0) && (
                                    <div className="position-absolute" style={{ width: "56px", height: "56px", top: "calc(50% - 28px)", left: "-86px" }}>
                                        <Button variant="dark" className="h-100 w-100 d-flex align-items-center justify-content-center rounded-circle fs-4" onClick={() => openImage(imageData.prev)}>
                                            <ChevronLeft />
                                        </Button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            )}

            <Toast className="position-fixed top-0 end-0 m-4" onClose={() => setShow(false)} show={show} bg={"danger"} autohide>
                <ToastHeader>
                    <Github className="me-2" />
                    <strong className="me-auto">Error occurred</strong>
                    <small className="text-muted">just now</small>
                </ToastHeader>
                <ToastBody>
                    {error}
                </ToastBody>
            </Toast>
        </Layout >
    )
}

export default PasswordManager

export const query = graphql`
query {
    allFile(filter: {relativeDirectory: {eq: "keymaster"}}, sort: {name: ASC}) {
      nodes {
        childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        relativeDirectory
      }
    }
}
`
