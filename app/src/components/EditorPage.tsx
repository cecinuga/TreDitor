import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import Scene from "./Scene";
import { Leva, LevaPanel } from "leva";
import { Button } from '@mui/material';
import { useQuery } from "react-query";
import { Api } from "../lib/api";
import { generatePath } from "react-router";
import { CavaliereContext } from "./Cavaliere/CavaliereContext";
import { getStyle } from "../lib/lib";

export default function EditorPage(){
    const {config, setConfig} = useContext(CavaliereContext)
    const {data, isLoading: isLoadingStile} = useQuery("stile", async () => {
        const stile = await getStyle("test")
        return {stile: stile}
    })
            
    return(
        <>
            {!isLoadingStile && 
                <>
                    <Suspense fallback={null}>
                        <Canvas shadows className="h-800px">
                            <Scene 
                                logo={`https://menumal.it/data/img/logo-${config.job}.png`} 
                                qrorder={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${config.job}`}
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