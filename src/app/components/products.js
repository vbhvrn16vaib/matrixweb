import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ElectricalServices from '../../pages/blog/electrical_services.mdx'
import PVSYSTEMS from '../../pages/blog/pv_systems.mdx'
import HAVELSPRODUCT from '../../pages/blog/havell_products.mdx'
import EHSPOLICY from '../../pages/blog/ehs_policy.mdx'

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
                    <EHSPOLICY />
                </Col>

            </Row>
        </Container>
    </>
}