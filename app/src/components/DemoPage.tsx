import { Canvas, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Suspense, useContext } from "react"
import DemoScene from "./DemoScene"
import { CavaliereContext } from "./Cavaliere/CavaliereContext"
import { useQuery } from "react-query"
import { getStyle } from "../lib/lib"
import { Stile } from "../App"

type DemoProps = {
    stile: Stile
}

export default function DemoPage(props: DemoProps){
    const {config, setConfig} = useContext(CavaliereContext)

    return(
        <>
            <Suspense fallback={null}>
                <Canvas className="h-800px">
                    <DemoScene 
                        logo={`https://menumal.it/data/img/logo-${config.job}.png`} 
                        qr={`https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${config.job}`}
                        style={props.stile}
                    />

                </Canvas>
            </Suspense>
        </>
    )
}