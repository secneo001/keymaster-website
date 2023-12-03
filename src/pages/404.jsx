import * as React from "react"
import { Link } from "gatsby"
import Layout from "components/layout"
import { Button, Col, Container, Row } from "react-bootstrap"
import Header from "components/header"

const NotFoundPage = ({ location }) => {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <Header />
      <Container className="d-flex flex-column flex-grow-1 justify-content-center">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="text-center">
              <h1 className="display-1">404</h1>
              <h2>Page Not Found</h2>
              <p>No page could be found at <code>{location.pathname}</code>.</p>
              <Button href="/">Go to Homepage</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>404: This page could not be found</title>
