import { Html } from "@react-three/drei"
import { useRef } from "react"
import { Col, Row } from "react-bootstrap"

export default function CavaliereLayer({position, rotation, scale, htmlPosition, color, source, sourceSize}){
    const frontRef = useRef(null)

    return(
        <mesh position={position} rotation={rotation} scale={scale} ref={frontRef}>
            <boxGeometry />
            <meshStandardMaterial color={color}/>
            <Html occlude="raycast" transform className="text-white" center position={htmlPosition}>
                <Row>
                    <Col xs={2}>
                        <img src={source} width={sourceSize}></img>
                    </Col>
                </Row>
            </Html>
        </mesh>
    )
}