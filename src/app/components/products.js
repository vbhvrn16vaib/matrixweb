'use client';

import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ElectricalServices from '../../pages/blog/electrical_services.mdx'
import PVSYSTEMS from '../../pages/blog/pv_systems.mdx'
import HAVELSPRODUCT from '../../pages/blog/havell_products.mdx'
import EHSPOLICY from '../../pages/blog/ehs_policy.mdx'
import QualityPolicy from '../../pages/blog/quality_policy.mdx'
import Maintainence from '../../pages/blog/maintainence.mdx'
import YoutubeEmbed from "./youtubeembed";
import './product.css'
import { AnimatePresence, motion } from "framer-motion"
import ProductCount from "./project_count";
import { StrictMode } from "react";
import { Parallax } from "react-scroll-parallax";

export default function Products() {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
    }

    return <>
        <hr></hr>
        <Container fluid>
            <Row>

                <Col>
                    <StrictMode>
                        <ProductCount />
                    </StrictMode>
                </Col>

            </Row>
            <hr></hr>
            <Parallax translateX={[-4, 12]}>
                <Row xs={1} md={2}>
                    <Col>
                        <Image
                            className="img"
                            src="/solar_image.png"
                            width={500}
                            height={500} />
                    </Col>

                    <Col className="justify-center">
                        <PVSYSTEMS />
                    </Col>
                </Row>
            </Parallax>
            <hr></hr>
            <Row>
                <Col>
                    <ElectricalServices />
                </Col>
                <Col>
                    <Image
                        className="img"
                        src="/home-electrical-wiring.webp"
                        width={500}
                        height={500} />
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <div>
                    <h2>Products</h2>
                </div>
                <Col>
                    <HAVELSPRODUCT />
                </Col>
                <Col>
                    <YoutubeEmbed embedId="oMiCjKqXAw4" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <iframe width="800" height="312" src="https://virtualshop.havells.com/e-commerce-tour/welcome-to-havells-experience-zone-038effba#HQRwv1An0Mw"
                        title="Havells Grid Tie Inverter"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <EHSPOLICY />
                </Col>
                <Col>
                    <QualityPolicy />
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <Maintainence />
                </Col>
            </Row>

        </Container>
    </>
}