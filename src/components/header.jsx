import React from "react";
import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


const items = [
]

const Header = () => {
    let location = useLocation().pathname
    if (location.length > 1) {
        location = location.replace(/\/$/, '')
    }

    return (
        <header>
            <Container>
                <Navbar bg="body-tertiary" variant="dark" expand='lg' className="rounded" >
                    <Container>
                        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
                            <StaticImage alt="KeyMaster" src="../images/logos/icon.jpg" className="rounded-circle mx-auto d-block img-fluid" width="32" height="32" />
                            <span className="fs-4">KeyMaster</span>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-md-end">
                            <Nav>
                                {
                                    items.map((item, i) => (
                                        <NavItem key={i}>
                                            <Link to={item.link} className={`nav-link ${location === item.link ? "active" : ""}`}>{item.text}</Link>
                                        </NavItem>
                                    ))
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container >
        </header >
    )
}

export default Header