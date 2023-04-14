import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import Scene from "./Scene";
import { Leva, LevaPanel } from "leva";
import { Button } from '@mui/material';
import { useQuery } from "react-query";
import { Api } from "../lib/api";
import { generatePath } from "react-router";
import { ConfigContext } from "../App";

export default function EditorPage(){
    const {config, setConfig} = useContext(ConfigContext)
    const {data, isLoading: isLoadingStile} = useQuery("stile", async () => {
        const stile = await fetch(config.stile).then(async res => await res.json())
        return {stile: stile}
    })
            
    return(
        <>
            {!isLoadingStile && 
                <>
                    <Suspense fallback={null}>
                        <Canvas shadows className="h-800px">
                            <Scene 
                                logo={config.logo} 
                                qrorder={config.qr}
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