import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";
import { Leva, LevaPanel } from "leva";
import { Button } from '@mui/material';
import { useQuery } from "react-query";
import { Api } from "../lib/api";
import { generatePath } from "react-router";

export default function EditorPage(){
    const {data, isLoading: isLoadingStile} = useQuery("stile", async () => {
        const stile = await fetch("https://menumal.it/data/style/test/style.txt").then(async res => await res.json())
        return {stile: stile}
    })
            
    return(
        <>
            {!isLoadingStile && 
                <>
                    <Suspense fallback={null}>
                        <Canvas shadows className="h-800px">
                            <Scene 
                                logo={"https://menumal.it/data/img/logo-test.png"} 
                                qrorder={"https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/test"}
                                qrnoorder={"https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/test@"}
                                style={data?.stile}
                            />
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
            } 
        </>
    )
}