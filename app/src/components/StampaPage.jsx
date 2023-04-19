import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import StampaScene from "./StampaScene";

export default function StampaPage({logo}){
    const [image, setImage] = useState()
    /*useEffect(()=>{
        let canvas = document.querySelector<HTMLCanvasElement>(".canvas canvas")
        const drawImage = async () => {
            if(canvas!=null&&canvas!=undefined&&canvas){
                setImage(await canvas?.toDataURL("image/jpeg", 1.0))
            }
        }
        drawImage()
    })*/

    return (
        <>
            <Canvas className="h-800px canvas" gl={{antialias: true, preserveDrawingBuffer: true}}>
                <StampaScene logo={logo}/>
            </Canvas>
            <img src={image} id="stampa" className=""></img>
        </>
   )
}