import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import ClientData from '../../pages/blog/client.mdx'

export default function Clients() {
    const images = ["/images/firepro.svg", "/images/zimcom.png", "/images/fireprologo.png", "/images/solars.svg", "/images/solars.svg"]

    return (
        <>
            <Row className='justify-content-center'>
                <div className='centerme'>
                    <h3>Trusted Partner</h3>
                </div>
            </Row>
            <Row>
                {Array(images.length).fill(0).map((_, i) => {
                    return (
                        <Col>
                            <Image
                                src={images[i]}
                                width={100}
                                height={100}
                            />
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}