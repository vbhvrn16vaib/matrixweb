import { Carousel } from "react-bootstrap";

export default function CarouselM() {
    return (
        <Carousel controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://picsum.photos/seed/picsum/900/500"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}