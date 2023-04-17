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
import { Stile } from "../App";

type EditorProps = {
    stile: Stile
}

export default function EditorPage(props: EditorProps){
    const {config, setConfig} = useContext(CavaliereContext)

    return(
        <>
                <Suspense fallback={null}>
                    <Canvas shadows className="h-800px">
                        <Scene 
                            logo={`https://menumal.it/data/img/logo-${config.job}.png`} 
                            style={props?.stile}
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
    )
}