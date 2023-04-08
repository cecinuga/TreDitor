import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import { Leva, LevaPanel } from "leva";
import { Button } from '@mui/material';

export default function EditorPage(){
    return(
        <>
            <Suspense fallback={null}>
                <Canvas shadows className="h-800px">
                    <Scene />
                </Canvas>
            </Suspense> 
            <Leva
                fill={false} 
                flat={false} 
                oneLineLabels={true} 
                titleBar={true} 
                collapsed={true} 
                hidden={false} 
            />  
            <LevaPanel></LevaPanel> 
        </>
    )
}