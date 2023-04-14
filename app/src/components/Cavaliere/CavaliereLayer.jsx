import { Bounds, Html, Instance, Instances, BBAnchor, Text, RoundedBox } from "@react-three/drei"
import { useRef } from "react"
import { angleToRadians, percent } from "../../lib/lib"
import { createPortal } from "react-dom"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import {Image} from './Image/Image'
import rocaOne from "../../fonts/roca/RocaOne-Bl.woff"

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
}){
    const paddingRef = useRef(null)
    const layerRef = useRef(null)
    useFrame(()=>{
        console.log(paddingRef)
    })


    return(
        <group scale={scale} position={position} rotation={rotation}>
            <group>
                <mesh ref={layerRef} >
                    <boxGeometry />
                    <meshStandardMaterial color={color}/>
                    <Text fontSize={textSize} color={textColor} rotation={textRotation} font={rocaOne} position={textPosition} scale={[0.02,0.02,0.02]}>{text}</Text>
                    <Text fontSize={textSizeSopra} color={textColorSopra} rotation={textRotationSopra} font={rocaOne} position={textPositionSopra} scale={[0.02,0.02,0.02]}>{textSopra}</Text>
                </mesh>
                {image && 
                    <>
                        <group scale={imgParentScale}>
                            <RoundedBox ref={paddingRef} scale={[0.75,0.55,0.85]} smoothness={5} rotation={paddingDir} position={paddingPos}>
                                <meshStandardMaterial color={paddingColor}/>
                            </RoundedBox>
                            <mesh position={[0,0.03,0]}>
                                <Image color={logoColor} position={imgPos} rotation={htmlRotation} url={image} scale={[0.62,0.45,1]} imgScale={imgScale} transparent={true} />
                            </mesh>
                        </group>
                    </>
                }
            </group>
            <mesh scale={[1, 0.92, 0.9]}  position={insidePos} >
                <boxGeometry />
                <meshStandardMaterial color={"white"}/>
            </mesh>
        </group>
    )
}
/*     
<Html transform className="text-white" position={[imgPos[0],imgPos[1],position[2]]} >
                {<img className="position-relative" src={image} width={`${imageWidth}px`} height={`${imageHeight}px`}></img>}
            </Html>           
*/