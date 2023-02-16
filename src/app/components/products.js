'use client';

import Image from "next/image";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import ElectricalServices from '../../pages/blog/electrical_services.mdx'
import PVSYSTEMS from '../../pages/blog/pv_systems.mdx'
import HAVELSPRODUCT from '../../pages/blog/havell_products.mdx'
import EHSPOLICY from '../../pages/blog/ehs_policy.mdx'
import QualityPolicy from '../../pages/blog/quality_policy.mdx'
import Maintainence from '../../pages/blog/maintainence.mdx'
import YoutubeEmbed from "./youtubeembed";
import './product.css'
import ProductCount from "./project_count";
import { StrictMode } from "react";

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
            <Row>
                <Col>
                    <CardGroup>
                        <Card className="p-3" >
                            <div className="card_container">
                                <div className="cardx">
                                    <div className="imgBx">
                                        <img src="/solar_image.png" />
                                    </div>
                                    <div className="contentBx">
                                        <h2>PV System</h2>
                                        <div className="color">
                                            <ul style={{listStyle: "none"}}>
                                            <hr/>
                                            <li>Solar energy products</li>
                                            <li>Solar thermal products.</li>
                                            <li>Fire Detection and Alarm System</li>
                                            <li>Fire Suppression Equipments</li>
                                            <li>CCTV</li>
                                            <li>Home Automation</li>
                                            <li>Access Control</li>
                                            </ul>
                                        </div>
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-3">
                        <div className="card_container">
                                <div className="cardx">
                                    <div className="imgBx">
                                        <img src="/home-electrical-wiring.webp" />
                                    </div>
                                    <div className="contentBx">
                                        <h2>Electricals</h2>
                                        <div className="color">
                                            <ul style={{listStyle: "none"}}>
                                            <hr/>
                                            <li>MATRIX SOLUTIONS provides electrical installation, maintenance and repair services to single family homes, condominiums, multiple family units, and commercial accounts for both new construction or remodelling projects.

</li>
                                            </ul>
                                        </div>
                                        <a href="#">More...</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-3">
                        <div className="card_container">
                                <div className="cardx">
                                    <div className="imgBx">
                                        <img src="/home-electrical-wiring.webp" />
                                    </div>
                                    <div className="contentBx">
                                        <h2>Products</h2>
                                        <div className="color">
                                            <ul style={{listStyle: "none"}}>
                                            <hr/>
                                            <li>HAVELLS is a big and well established name in field of electricals and also deals in Solar products. Matrix solution is a business partner of the company and can provide the products including installation services for the following category of products.

</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-3">
                        <div className="card_container">
                                <div className="cardx">
                                    <div className="imgBx">
                                        <img src="/home-electrical-wiring.webp" />
                                    </div>
                                    <div className="contentBx">
                                        <h2>Policies</h2>
                                        <div className="color">
                                            <ul style={{listStyle: "none"}}>
                                            <hr/>
                                            <li>Explore our EHS and Quality Policies..</li>
                                            </ul>
                                        </div>
                                        <a href="#">More...</a>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-3">
                        <div className="card_container">
                                <div className="cardx">
                                    <div className="imgBx">
                                        <img src="/home-electrical-wiring.webp" />
                                    </div>
                                    <div className="contentBx">
                                        <h2>Maintainence</h2>
                                        <div className="color">
                                            <ul style={{listStyle: "none"}}>
                                            <hr/>
                                            <li>We undertake the maintenance of commercial as well residential building for the following systems as O&M Service or as Preventive Service.</li>
                                            </ul>
                                        </div>
                                        <a href="#">More...</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </CardGroup>

                </Col>
            </Row>
            {/* <hr></hr>
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
            </Row> */}
            {/* <hr></hr>
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
            </Row> */}

        </Container>
    </>
}