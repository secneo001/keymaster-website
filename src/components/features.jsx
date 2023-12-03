import { Col } from "react-bootstrap"
import React from "react"
import * as styles from "./features.module.css"

function Feature({ title, description, icon }) {
    return (
        <Col className="d-flex align-items-start">
            <div className={`text-body-secondary flex-shrink-0 me-3 ${styles.featureIcon}`}>
                {icon}
            </div>
            <div>
                <h3 className="fw-bold mb-0 fs-4">{title}</h3>
                <p>{description}</p>
            </div>
        </Col>
    )
}

function FeatureSmall({ title, description, icon }) {
    return (
        <Col className="d-flex flex-column gap-2">
            <div className={`${styles.featureIconSmall} d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3`}>
                {icon}
            </div>
            <h4 className="fw-semibold mb-0">{title}</h4>
            <p className="text-body-secondary text-justify">{description}</p>
        </Col>
    )
}

export { Feature, FeatureSmall }