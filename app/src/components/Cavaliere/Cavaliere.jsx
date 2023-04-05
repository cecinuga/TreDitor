import { Html, Text } from "@react-three/drei";
import { angleToRadians } from "../Scene";
import { useRef, useState, ReactElement } from "react";
import { Col, Row } from "react-bootstrap";
import { useThree } from "@react-three/fiber";
import qrcode from '../../assets/qrcode.png'
import CavaliereLayer from "./CavaliereLayer";

export default function Cavaliere({meshPos, meshScale, baseColor, frontColor, backColor, frontElements, backElements, baseElements}){
    const frontRef = useRef(null)
    const {camera, viewport} = useThree()

    /*const frontChildren = useState<ReactElement[frontElements.length]>(frontElements)
    const backChildren = useState<ReactElement[backElements.length]>(backElements)
    const baseChildren = useState<ReactElement[baseElements.length]>(baseElements)

    [
        <Row>
            <Col xs={12}>
                <img src={qrcode} width={"15px"}></img>
            </Col>
        </Row>
    ]*/

    return(
        <>
            <group position={meshPos} scale={meshScale}>
                <CavaliereLayer 
                    position={[0,0,0]} 
                    rotation={[angleToRadians(90), 0, 0]}
                    scale={[0.5,0.45,0.01]}
                    htmlPosition={[0, 0.05, -0.6]}
                    color={baseColor}
                    source={qrcode}
                    sourceSize={"20px"}
                    //childrens={frontChildren}
                />
                <CavaliereLayer 
                    position={[0,0.245,-0.156]} 
                    rotation={[angleToRadians(15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[0, 0.05, -0.6]}
                    color={frontColor}
                    source={qrcode}
                    sourceSize={"20px"}
                    //childrens={frontChildren}
                />
                <CavaliereLayer 
                    position={[0,0.245,0.156]} 
                    rotation={[angleToRadians(-15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[0, 0.05, 0.6]}
                    color={frontColor}
                    source={qrcode}
                    sourceSize={"20px"}
                    //childrens={backChildren}
                />
                <mesh position={[0,0.245,0.156]} rotation={[angleToRadians(-15), 0, 0]} scale={[0.5,0.5,0.01]}>
                    <boxGeometry />
                    <meshStandardMaterial color={backColor}/>
                </mesh>
            </group>
        </>
    )
}