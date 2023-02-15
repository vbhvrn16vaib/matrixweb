import { animate, useMotionValue, useTransform, motion } from "framer-motion"
import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"

export default function ProductCount() {
    const totalProduct = 150
    const totalProductCounter = useMotionValue(0)
    const currentProject = useMotionValue(0)
    const totalRound = useTransform(totalProductCounter, Math.round)
    const rounded = useTransform(currentProject, Math.round)

    useEffect(() => {
        const animation = animate(totalProductCounter, totalProduct, { duration: 3 });
        const runningProject = animate(currentProject, 10, { duration: 3 });


        return animation.stop && runningProject.stop;
    }, [])

    return (
        <>
            <Row className="counters">
                <Col>
                    <motion.h1>{totalRound}</motion.h1> Total Projects
                </Col>
                <Col>
                    <motion.h1>{rounded}</motion.h1> Currently Running
                </Col>
            </Row>
        </>
    )
}