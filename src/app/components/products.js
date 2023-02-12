import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function Products() {
    return <>

        <Container fluid>
            <Row xs={1} md={2}>
                <Col className="justify-center">
                    Solar energy products
                </Col>
                <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>
            </Row>
            <Row>
            <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>
                <Col>Fire Detection and Alarm System</Col>
            </Row>
            <Row>
                <Col>Fire Suppression Equipments</Col>
                <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>
            </Row>
            <Row>
            <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>
                <Col>Solar energy products</Col>
            </Row>
            <Row>
                <Col>CCTV</Col>
                <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>
            </Row>
            <Row>
            <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>
                <Col>Home Automation</Col>
            </Row>
            <Row>
                <Col>Access Control</Col>
                <Col>
                    <Image
                        src="/solar_image.png"
                        width={500}
                        height={500} />
                </Col>
            </Row>
        </Container>
    </>;
}