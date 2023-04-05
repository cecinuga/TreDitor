import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Editor from "./Editor";

export default function EditorPage(){
    return(
        <>
            <Suspense fallback={null}>
                <Canvas shadows className="h-800px">
                    <Editor />
                </Canvas>
            </Suspense> 
        </>
    )
}