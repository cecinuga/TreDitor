import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";

export default function EditorPage(){
    return(
        <>
            <Suspense fallback={null}>
                <Canvas shadows className="h-800px">
                    <Scene />
                </Canvas>
            </Suspense> 
        </>
    )
}