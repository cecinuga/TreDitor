import { Html, Instance, Instances, Text, Image } from "@react-three/drei"
import { useRef } from "react"
import { angleToRadians } from "../../lib/lib"
import { createPortal } from "react-dom"
import { useLoader, useThree } from "@react-three/fiber"
import {TextureLoader} from "three"

export default function CavaliereLayer({position, rotation, scale, htmlPosition, color, image, text, textSize, textColor, textFont, textPosition, textRotation, imageWidth, imageHeight}){
    const frontRef = useRef(null)
    const { camera, viewport } = useThree() 
    

    return(
        <group >
            <mesh rotation={rotation} scale={scale} position={position} ref={frontRef}>
                <boxGeometry />
                <meshStandardMaterial color={color}/>
               <Text fontSize={textSize} color={textColor} rotation={[textRotation[0], angleToRadians(180)-textRotation[1], textRotation[2]]} font={textFont} position={textPosition} scale={[0.02,0.02,0.02]}>{text}</Text>
            </mesh>
            <Image position={htmlPosition} url={image} scale={[1,1,1]} width={`${imageWidth}%`} height={`${imageHeight}%`} />
        </group>
    )
}
/*     
<Html transform className="text-white" position={[htmlPosition[0],htmlPosition[1],position[2]]} >
                {<img className="position-relative" src={image} width={`${imageWidth}px`} height={`${imageHeight}px`}></img>}
            </Html>           
*/