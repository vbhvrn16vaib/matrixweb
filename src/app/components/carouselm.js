import { Carousel } from "react-bootstrap";

export default function CarouselM() {
    return (
        <Carousel controls={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    width={900}
                    height={600}
                    src="solar_pannels.avif"
                    alt="MAXSOL SOLUTIONS"
                />
                {/* <Carousel.Caption>
                    <h3>Matrix Solutions</h3>
                    <p>Go Green!</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}