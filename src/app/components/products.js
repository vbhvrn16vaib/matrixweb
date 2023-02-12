import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ElectricalServices from '../../pages/blog/electrical_services.mdx'
import PVSYSTEMS from '../../pages/blog/pv_systems.mdx'
import HAVELSPRODUCT from '../../pages/blog/havell_products.mdx'
import EHSPOLICY from '../../pages/blog/ehs_policy.mdx'
import QualityPolicy from '../../pages/blog/quality_policy.mdx'
import Maintainence from '../../pages/blog/maintainence.mdx'

export default function Products() {
    return <>
        <hr></hr>
        <Container fluid>
            <Row xs={1} md={2}>
                <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>

                <Col className="justify-center">
                    <PVSYSTEMS />
                </Col>

            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <ElectricalServices />
                </Col>
                <Col>
                    <Image
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
                <iframe width="555" height="312" src="https://www.youtube.com/embed/oMiCjKqXAw4" title="Havells Grid Tie Inverter" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
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