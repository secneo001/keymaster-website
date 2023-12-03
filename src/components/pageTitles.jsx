import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

export const CommonPageTitle = ({ title, description, beta, image, children }) => {
    return (
        <Container className="my-5">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <Row className="align-items-center">
                    {
                        image && (
                            <Col lg={3}>
                                {
                                    typeof image === 'string' ? (
                                        <Image loading="lazy" src={image} fluid className="d-block mx-auto rounded-4" />
                                    ) : (
                                        image
                                    )
                                }
                            </Col>
                        )
                    }

                    <Col lg={image ? 9 : 0}>
                        <div className="text-body-emphasis">
                            <SectionTitle title={title} beta={beta} />
                        </div>
                        <p className="lead">
                            {description}
                        </p>
                        {children}
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export const SectionTitle = ({ title, description, beta }) => {
    return (
        <div className="section-title mb-3">
            <div className="d-flex align-items-center mb-2 flex-column">
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <h2 className="mb-0">{title}{beta ? <span class="badge rounded-pill text-bg-warning ms-3">BETA</span> : ''}</h2>
                </div>
            </div>
            <div className="line mb-4" />
            <p>{description}</p>
        </div >
    )
}