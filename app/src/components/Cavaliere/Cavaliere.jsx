import { Html, Text } from "@react-three/drei";
import { angleToRadians } from "../Editor";
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useThree } from "@react-three/fiber";
import qrcode from '../../assets/qrcode.png'
import CavaliereLayer from "./CavaliereLayer";

export default function Cavaliere({meshPos, meshScale, baseColor, frontColor, backColor, qrCodeSize}){
    const frontRef = useRef(null)
    const {camera, viewport} = useThree()

    return(
        <>
            <group position={meshPos} scale={meshScale}>
                <mesh scale={[0.5,0.45,0.01]} rotation={[angleToRadians(90), 0, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color={baseColor}/>
                </mesh>
                <CavaliereLayer 
                    position={[0,0.245,-0.156]} 
                    rotation={[angleToRadians(15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[0, 0.05, -0.6]}
                    color={frontColor}
                    source={qrcode}
                    sourceSize={"20px"}
                />
                <CavaliereLayer 
                    position={[0,0.245,0.156]} 
                    rotation={[angleToRadians(-15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[0, 0.05, 0.6]}
                    color={frontColor}
                    source={qrcode}
                    sourceSize={"20px"}
                />
                <mesh position={[0,0.245,0.156]} rotation={[angleToRadians(-15), 0, 0]} scale={[0.5,0.5,0.01]}>
                    <boxGeometry />
                    <meshStandardMaterial color={backColor}/>
                </mesh>
            </group>
        </>
    )
}