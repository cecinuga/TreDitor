import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import StampaScene from "./StampaScene";
import Loader from "./Loader";

export default function StampaPage({logo}){
    return (
        <>
            <Suspense fallback={<Loader>Tipografia portami via...</Loader>}>
                <Canvas style={{width: "900px", height: "3000px", margin: "auto"}} className="canvas" gl={{antialias: true, preserveDrawingBuffer: true}}>
                    <StampaScene logo={logo}/>
                </Canvas>
            </Suspense>
        </>
   )
}