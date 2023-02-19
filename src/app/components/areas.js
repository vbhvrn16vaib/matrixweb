import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-scroll-parallax";
import './../disc.css'

export default function Areas() {
    const images = ["/images/telecom.svg", "/images/solars.svg", "/images/hrum-home.svg", "/images/cctv.svg"]

    const content = [" Telecom, Network Systems (Installation of Data Wiring & Components) Phone & Data Outlets ( Installation, Repair & Maintenance) Trouble Shooting ( General Trouble Shooting of Electrical System problems)",
        "Solar Panels, Suggestions,  Panel Replacements ( Replace Fuse or old breaker panels with new Circuit Breaker Panels)",
        " Lighting – Interior / Exterior ( Installation, Repair & Maintenance of Fixtures & Wiring ) Lighting – Landscape ( Installation, Repair & Maintenance of Fixtures & Wiring ), Home Inspections ( Buyer / Seller House Inspection), Smoke Detectors ( Installations)",
        " *Automation Controls & Systems ( Automatic Lighting) * CCTV"]

    
        const trans = [[-10,20], [10,-10]]

    function imageElement(img, i){
        if(i == undefined || i == null) return<></>
        let x = trans[i%2][0]
        let y = trans[i%2][1]
        return (<Col key={i} >
        <Parallax translateX={[x, y]}>
            <Image
                src={img}
                width={300}
                height={400}
            />
        </Parallax>
    </Col>)
    }

    function contentElement(content, i){
        if(i == undefined || i == null) return<></>
        let x = trans[i%2][0]
        let y = trans[i%2][1]
        return (
            <Col key={i} className="text-center">
                <Parallax translateX={[x, y]}>
                    <div className="area-content">
                        {content}
                    </div>
                </Parallax>
            </Col>)
    }

    function alt(i){
            if(i%2 == 0){
                return (<>
                {imageElement(images[i], i)}
                {contentElement(content[i], i)}
                </>)
        }else{
                return (<>
                {contentElement(content[i], i)}
                {imageElement(images[i], i)}
                </>);
        }
    }


    return (
        <Container>
            {Array(images.length).fill(0).map((_, i) => {
                return (
                    <Row key={i} className="justify-content-md-center">
                        {alt(i)}
                    </Row>
                )
            })}
        </Container>)
}