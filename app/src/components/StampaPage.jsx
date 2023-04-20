import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import StampaScene from "./StampaScene";

export default function StampaPage({logo}){
    const [image, setImage] = useState()

    return (
        <>
            <Canvas style={{width: "900px", height: "3000px", margin: "auto"}} className="canvas" gl={{antialias: true, preserveDrawingBuffer: true}}>
                <StampaScene logo={logo}/>
            </Canvas>
        </>
   )
}