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

export default function Products() {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
    }


    return <>
        <hr></hr>
            <Container fluid>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={spring} >
                    <Row xs={1} md={2}>
                        <Col>
                            <Image
                                className="img"
                                src="/solar_image.png"
                                width={500}
                                height={500} />
                        </Col>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}>
                            <Col className="justify-center">
                                <PVSYSTEMS />
                            </Col>
                        </motion.div>
                    </Row>
                    <hr></hr>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }} >
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
                    </motion.div>
                    <hr></hr>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={spring} >
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
                    </motion.div>
                    <hr></hr>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={spring} >
                    <Row>
                        <Col>
                            <EHSPOLICY />
                        </Col>
                        <Col>
                            <QualityPolicy />
                        </Col>
                    </Row>
                    </motion.div>
                    <hr></hr>
                    <Row>
                        <Col>
                            <Maintainence />
                        </Col>
                    </Row>
                </motion.div>
                </AnimatePresence>
            </Container>
    </>
}