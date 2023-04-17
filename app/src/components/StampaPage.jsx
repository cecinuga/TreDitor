import { Canvas, useFrame } from "@react-three/fiber";
import Cavaliere from "./Cavaliere/Cavaliere";
import { CavaliereContext } from "./Cavaliere/CavaliereContext";
import { useContext, useEffect, useRef, useState } from "react";
import { angleToRadians } from "../lib/lib";
import { OrbitControls } from "@react-three/drei";
import { saveAs } from 'file-saver'

export default function StampaPage({logo}){
    const {config, setConfig} = useContext(CavaliereContext)
    const cavaliereRef = useRef(null)
    const [xRotation, setXRotation] = useState(12)
    const [yRotation, setYRotation] = useState(0)

    return (
        <Canvas className="h-800px canvas">

            <ambientLight color={"white"}/>
            <Cavaliere 
                currentRef={cavaliereRef}
                meshPos={[0,-1.3,0]} 
                meshScale={[5,5,5]}
                rotation={[angleToRadians(xRotation), angleToRadians(yRotation), 0]}
                
                backHtmlScale={[1.8,1]}
                backColor={config.backColor} 
                backImage={logo}
                backImagePos={config.backLogoPos}
                backLogoColor={config.backImageColor}

                frontHtmlScale={[0.9,0.9,0.5]}
                frontColor={config.frontColor} 
                frontImage={config.qr}
                frontImagePos={config.frontImagePos}      
                frontText={config.frontTextDown}
                frontTextSize={config.frontTextDownSize}
                frontTextColor={config.frontTextDownColor}
                frontTextPosition={config.frontTextDownPos}
                frontTextSopra={config.frontTextUp}
                frontTextSizeSopra={config.frontTextUpSize}
                frontTextColorSopra={config.frontTextUpColor}
                frontTextPositionSopra={config.frontTextUpPos}

                baseHtmlScale={[0,0]}
                baseColor={config.baseColor} 
                baseImage={""}
                baseImagePos={""}
                baseText={""}
                baseTextSize={""}
                baseTextColor={""}
                baseTextPosition={""}
            />
        </Canvas>
    )
}