import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import table from './Cavaliere/models/table.glb'
import ground from './Cavaliere/models/ground.glb'
import resturant from './Cavaliere/models/resturant.hdr'
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { angleToRadians } from "../lib/lib"
import Cavaliere from "./Cavaliere/Cavaliere"
import { useContext, useEffect } from "react"
import { CavaliereContext } from "./Cavaliere/CavaliereContext"

export default function DemoScene({logo, qr, style}){
    const tableModel = useLoader(GLTFLoader, table)
    const groundModel = useLoader(GLTFLoader, ground)
    const groundModel2 = useLoader(GLTFLoader, ground)

    const {config, setConfig} = useContext(CavaliereContext)
    const tablePos = [0, 0, 0]
    const cavalierePos = [-0.3,0.75,0]

    return (
    <>
        <OrbitControls target={cavalierePos} maxPolarAngle={angleToRadians(88)} maxDistance={5}/>
        <PerspectiveCamera makeDefault fov={33} position={[-4, 4, -5]} />
        <ambientLight color="white" />
        <spotLight intensity={1} color="red" position={[-1,0.5,0]} castShadow/>
        <spotLight intensity={1} color={config.frontColor} position={[0,2,0]} castShadow/>

        <primitive object={tableModel.scene} scale={[0.001,0.001,0.001]} position={tablePos} castShadow receiveShadow/>
        
        <primitive object={groundModel.scene} position={[0,-0.8,0.35]} scale={[3,3,3]} castShadow receiveShadow/>
        <Environment 
            files={resturant} 
            near={5}
            far={1000}
            resolution={256}
            background
        />

        <Cavaliere 
            isTexture={true}
            meshPos={cavalierePos} 
            meshScale={[0.15, 0.15, 0.15]}
            
            backHtmlScale={[1.8,1]}
            backColor={config.backColor} 
            backImage={logo}
            backImagePos={config.backLogoPos}
            backLogoColor={config.backImageColor}

            frontHtmlScale={[0.9,0.9,0.5]}
            frontColor={config.frontColor} 
            frontImage={config.qr}
            frontImagePos={config.frontImagePos}      
            frontText={config.frontTextDown}
            frontTextSize={config.frontTextDownSize}
            frontTextColor={config.frontTextDownColor}
            frontTextPosition={config.frontTextDownPos}
            frontTextSopra={config.frontTextUp}
            frontTextSizeSopra={config.frontTextUpSize}
            frontTextColorSopra={config.frontTextUpColor}
            frontTextPositionSopra={config.frontTextUpPos}

            baseHtmlScale={[0,0]}
            baseColor={config.baseColor} 
            baseImage={""}
            baseImagePos={""}
            baseText={""}
            baseTextSize={""}
            baseTextColor={""}
            baseTextPosition={""}
        />

        <Cavaliere 
            isTexture={true}
            meshPos={[0.38,0.75,0]} 
            meshScale={[0.15, 0.15, 0.15]}
            
            backHtmlScale={[1.8,1]}
            backColor={config.backColor} 
            backImage={logo}
            backImagePos={config.backLogoPos}
            backLogoColor={config.backImageColor}

            frontHtmlScale={[0.9,0.9,0.5]}
            frontColor={config.frontColor} 
            frontImage={config.qr}
            frontImagePos={config.frontImagePos}      
            frontText={config.frontTextDown}
            frontTextSize={config.frontTextDownSize}
            frontTextColor={config.frontTextDownColor}
            frontTextPosition={config.frontTextDownPos}
            frontTextSopra={config.frontTextUp}
            frontTextSizeSopra={config.frontTextUpSize}
            frontTextColorSopra={config.frontTextUpColor}
            frontTextPositionSopra={config.frontTextUpPos}

            baseHtmlScale={[0,0]}
            baseColor={config.baseColor} 
            baseImage={""}
            baseImagePos={""}
            baseText={""}
            baseTextSize={""}
            baseTextColor={""}
            baseTextPosition={""}
        />

    </>
    )
}