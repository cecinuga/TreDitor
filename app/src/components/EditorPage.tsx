import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import { Leva, LevaPanel } from "leva";
import { Button } from '@mui/material';
import { useQuery } from "react-query";
import { Api } from "../lib/api";

export default function EditorPage(){
    const {data, isLoading} = useQuery("menumal", async () => {
        const logo = await Api.get("data/img/logo-test.png");
        const stile = await Api.get("data/style/test/style.txt", );

        if(logo.kind!='ok'){
          return 
        }
      })
        
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