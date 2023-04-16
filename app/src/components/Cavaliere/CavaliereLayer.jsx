import { Bounds, Html, Instance, Instances, BBAnchor, Text, RoundedBox, useTexture } from "@react-three/drei"
import { useRef } from "react"
import { angleToRadians, percent } from "../../lib/lib"
import { createPortal } from "react-dom"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import {Image} from './Image/Image'
import rocaOne from "../../fonts/roca/RocaOne-Bl.woff"
import cartatexture from "./models/cartatexture.jpg"
import cartatexturedietro from "./models/cartatexturedietro.jpeg"

export default function CavaliereLayer({position
    ,rotation
    ,scale
    ,imgPos
    ,color
    ,image
    ,text
    ,textSize
    ,textColor
    ,textPosition
    ,htmlRotation
    ,imgParentScale
    ,logoColor
    ,textRotation
    ,textSopra
    ,textSizeSopra
    ,textColorSopra
    ,textPositionSopra
    ,textRotationSopra
    ,imgScale
    ,insidePos
    ,paddingColor=color
    ,paddingPos=[0,0,0]
    ,paddingDir
    ,dashedPos
}){
    const paddingRef = useRef(null)
    const layerRef = useRef(null)
    const texture = useTexture(cartatexture)
    const texturedietro = useTexture(cartatexturedietro)

    useFrame(()=>{
        console.log(paddingRef)
    })


    return(
        <group scale={scale} position={position} rotation={rotation} castShadow>
            <group>
                <mesh ref={layerRef}>
                    <boxGeometry />
                    <meshPhongMaterial color={color} map={texturedietro}/>
                    <Text fontSize={textSize} color={textColor} rotation={textRotation} font={rocaOne} position={textPosition} scale={[0.02,0.02,0.02]}>{text}</Text>
                    <Text fontSize={textSizeSopra} color={textColorSopra} rotation={textRotationSopra} font={rocaOne} position={textPositionSopra} scale={[0.02,0.02,0.02]}>{textSopra}</Text>
                </mesh>
                {image && 
                    <group scale={imgParentScale}>
                        <RoundedBox ref={paddingRef} scale={[0.75,0.55,0.85]} smoothness={5} rotation={paddingDir} position={paddingPos}>
                            <meshStandardMaterial color={paddingColor}/>
                        </RoundedBox>
                        <mesh position={[0,0.03,0]}>
                            <Image color={logoColor} position={imgPos} rotation={htmlRotation} url={image} scale={[0.62,0.45,1]} imgScale={imgScale} transparent={true} />
                        </mesh>
                    </group>
                }
            </group>
            <mesh scale={[1, 1, 0.9]} position={insidePos} >
                <boxGeometry />
                <meshStandardMaterial color={"white"} map={texture}/>
            </mesh>
            {dashedPos && 
                <group position={dashedPos}>
                    {[0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((item, i)=>
                        <mesh position={[i/25, 0, 0]}>
                            <boxGeometry args={[0.018, 0.004, 0.1]} />
                            <meshStandardMaterial color="white"/>
                        </mesh>
                    )}
                </group>
            }
        </group>
    )
}
/*     
<Html transform className="text-white" position={[imgPos[0],imgPos[1],position[2]]} >
                {<img className="position-relative" src={image} width={`${imageWidth}px`} height={`${imageHeight}px`}></img>}
            </Html>           
*/