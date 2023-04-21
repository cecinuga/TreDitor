import { Canvas } from "@react-three/fiber";
import { Suspense, useContext } from "react";
import Scene from "./Scene";
import { Leva, LevaPanel } from "leva";
import { CavaliereContext } from "./Cavaliere/CavaliereContext";
import { Stile } from "../App";
import Loader from "./Loader";

type EditorProps = {
    stile: Stile
}

export default function EditorPage(props: EditorProps){
    const {config, setConfig} = useContext(CavaliereContext)

    return(
        <>
                <Suspense fallback={<Loader>Prendendo gli strumenti...</Loader>}>
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