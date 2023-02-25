'use client';

import Image from "next/image";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
// import ElectricalServices from '../../pages/blog/electrical_services.mdx'
// import PVSYSTEMS from '../../pages/blog/pv_systems.mdx'
// import HAVELSPRODUCT from '../../pages/blog/havell_products.mdx'
// import EHSPOLICY from '../../pages/blog/ehs_policy.mdx'
// import QualityPolicy from '../../pages/blog/quality_policy.mdx'
// import Maintainence from '../../pages/blog/maintainence.mdx'
import YoutubeEmbed from "./youtubeembed";
import './product.css'
import ProductCount from "./project_count";
import { StrictMode } from "react";
import MyCards from "./mycards";

export default function Products() {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
    }

    return <>
        <hr></hr>
        <Container fluid>
            <Row className="rowd">
                <Col>
                    <StrictMode>
                        <ProductCount />
                    </StrictMode>
                </Col>
            </Row>
            <Row className="rowd">
                <Col>
                    <MyCards />
                </Col>
            </Row>
        </Container>
    </>
}