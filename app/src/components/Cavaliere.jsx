import { Html, Text } from "@react-three/drei";
import { angleToRadians } from "./Editor";
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";

export default function Cavaliere({meshPos, meshScale, baseColor, frontColor, backColor}){
    const frontRef = useRef(null)

    return(
        <>
            <group position={meshPos} scale={meshScale}>
                <mesh scale={[0.5,0.45,0.01]} rotation={[angleToRadians(90), 0, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color={baseColor}/>
                </mesh>
                <mesh position={[0,0.245,-0.156]} rotation={[angleToRadians(15), 0, 0]} scale={[0.5,0.5,0.01]} ref={frontRef}>
                    <boxGeometry />
                    <meshStandardMaterial color={frontColor}/>
                    <Text position={[0,1,-11]} rotation={[0,angleToRadians(180), 0]}>
                        <Html transform className="text-white" center>
                            <Row>
                                <Col xs={2}>ciao</Col>
                            </Row>
                        </Html>
                    </Text>
                </mesh>
                <mesh position={[0,0.245,0.156]} rotation={[angleToRadians(-15), 0, 0]} scale={[0.5,0.5,0.01]}>
                    <boxGeometry />
                    <meshStandardMaterial color={backColor}/>
                </mesh>
            </group>
        </>
    )
}