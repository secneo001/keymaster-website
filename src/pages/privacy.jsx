import Layout from "components/layout";
import { CommonPageTitle, SectionTitle } from "components/pageTitles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Privacy = () => {


    return (
        <Layout>
            <CommonPageTitle title={"App Privacy Policy"} description={<><p className="text-info">Effective Date: 19.11.2023</p><p className="mb-1 text-light">KeyMaster - Password Vault</p></>} />

            <div className="text-center">
                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Introduction"} />
                        <p>Your information security is crucial to us. Password butler is committed to providing more secure products and services for every user.</p>
                        <p>KeyMaster - Password Vault ("KeyMaster" or "the App") is a completely free offline and non networked password management application. Your data is always stored locally on the device, and we do not collect or transmit any device information or user data of you.</p>
                        <p>We have taken unique measures such as data security encryption, data secure storage, and application software protection to protect the security of your information and data as much as possible.</p>
                        <p>At the same time, we have also taken privacy protection measures such as secure input keyboard, anti screenshot/recording, clipboard data clearing, application password lock, and data self destruction to protect your privacy and security during the use of KeyMaster products and services as much as possible.</p>
                        <p>Due to the KeyMaster is complete offline data being stored locally on the device, any information vulnerabilities caused by various reasons (including but not limited to using root devices, system rom modifications, device Trojan viruses, device loss, use of non genuine apps, etc.) shall be borne by the user yourself.</p>
                        <p>Please confirm that you are a person aged 18 and above.</p>
                    </Container>
                </section>


                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Application Scope"} />
                        <p>This Privacy Policy specifically applies to the version of KeyMaster - Password Vault that is available for download from github. It covers the features and permissions associated with the App.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Data Collection and Use"} />
                        <Row md={1} xs={1}>
                            <Col>
                                <p><strong className="fs-5">Personal Information:</strong> KeyMaster does not gather or process any personal information from its users. As the developer, Neo, I do not collect, store, or process any personal or sensitive data.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"User Data Storage"} />
                        <Row md={2} xs={1}>
                            <Col>
                                <p><strong className="fs-5">Data Encryption:</strong> User data, such as passwords and other elements entered into the App, is stored encrypted on your device. KeyMaster does not store this data on any server owned by Neo or any third-party company.</p>
                            </Col>
                            <Col>
                                <p><strong className="fs-5">App-specific Database Storage:</strong> The application utilizes the App-specific encryption database (Tencent WCDB), to securely store encrypted data. This storage access does not require any additional permissions, enhancing the security and privacy of your information.</p>
                            </Col>
                            <Col className="flex-grow-1">
                                <p><strong className="fs-5">No Access to User Data:</strong> As the developer of KeyMaster, I do not have access to or hold any user data stored on your device. Consequently, I cannot process, sell, or share any user data with third-party entities.</p>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"App Permissions"} />
                        <p><strong className="fs-5">NFC (Near Field Communication):</strong> The application may request permission to use the NFC feature on your device to read credit card information. This feature facilitates the fast and easy input of credit card information and eliminates the need for manual entry. Please note that this information is solely encrypted and stored on your device for your convenience. KeyMaster does not send this information to anyone or share it with any third party.You can choose to turn it off at any time in the device&#39;s [Settings] function. The display and closing methods of permissions may vary among different devices. Please refer to the instructions or guidelines of the device and system developers for details.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Data Security"} />
                        <Col>
                            <p><strong className="fs-5">Password Information Protection:</strong> When you use the password information storage function of KeyMaster, we will encrypt and store the account and password information you entered locally on the device, and we will not transmit your data over the network.</p>
                        </Col>
                        <Col>
                            <p><strong className="fs-5">Credit card Information Protection:</strong> When you use the credit card information storage function of KeyMaster, we will encrypt and store the credit card number, cardholder, CVV, and expiration time information you entered locally on the device, and we will not transmit your data over the network. Only when you use the NFC automatic card reading function will you be applied for NFC basic function permission.</p>
                        </Col>
                        <Col>
                            <p><strong className="fs-5">APP Runtime Protection:</strong> When you use the KeyMaster function service, the APP backend automatically opens the security and privacy protection function. By obtaining the application process status and detecting characteristic system files, you can determine security risks, and regularly clean up the remaining data in the clipboard after password copying operations. By default, the system screen capture/recording is prohibited to protect privacy and security. By default, the APP password lock is enabled.</p>
                        </Col>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Changes to this Privacy Policy"} />
                        <p>I may update this Privacy Policy from time to time, and any changes will be effective as of the revised date indicated at the top of this page. It is recommended to review this Privacy Policy periodically for any updates. I will notify users of any changes by posting the updated Privacy Policy on this page. By continuing to use KeyMaster, you agree to be bound by the latest version of this Privacy Policy.</p>
                    </Container>
                </section>

                <section>
                    <Container className="shadow p-5">
                        <SectionTitle title={"Contact Information"} />
                        <Row md={2} xs={1}>
                            <Col>
                                <p>If you have any questions, suggestions, or concerns about this Privacy Policy or KeyMaster, please feel free to contact me at: <a href="mailto:secneo520@gmail.com">secneo520@gmail.com</a></p>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li>DEVELOPER:Neo</li>
                                    <li>CERT.RSA(md5):50C4330924AE1BFCF224AB235EC24B3A</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}

export default Privacy