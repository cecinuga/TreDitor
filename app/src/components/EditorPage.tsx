import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import Editor from "./Editor/Editor";

export default function EditorPage(){
    return(
        <>
            <Suspense fallback={null}>
                <Canvas shadows className="h-800px">
                    <Scene />
                    <Editor />
                </Canvas>
            </Suspense> 
        </>
    )
}