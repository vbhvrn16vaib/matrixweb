import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import './product.css'

export default function Clients() {
    const images = ["/images/zimcom.png", "/images/fireprologo.png", "/images/johnson-controls.png", "/images/havells.png"]

    return (
        <>
            <Row className='justify-content-center rowd'>
                <div className='centerme'>
                    <h3>Trusted Partner</h3>
                </div>
            </Row>
            <Row className='justify-content-center rowd'>
                {Array(images.length).fill(0).map((_, i) => {
                    return (
                        <Col key={i} >
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