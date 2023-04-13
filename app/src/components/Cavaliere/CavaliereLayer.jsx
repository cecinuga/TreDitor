import { Bounds, Html, Instance, Instances, BBAnchor, Text } from "@react-three/drei"
import { useRef } from "react"
import { angleToRadians } from "../../lib/lib"
import { createPortal } from "react-dom"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import {Image} from './Image/Image'

export default function CavaliereLayer({position, rotation, scale, htmlPosition, color, image, text, textSize, textColor, textFont, textPosition, htmlRotation, htmlScale, logoColor, textRotation, textSopra, textSizeSopra, textColorSopra, textFontSopra, textPositionSopra, textRotationSopra, imgScale}){
    const imageRef = useRef(null)
    
    useFrame(()=>{
        if(imageRef.current){
            console.log(imageRef.current)
        }
    })

    return(
        <group >
            <mesh rotation={rotation} scale={scale} position={position}>
                <boxGeometry />
                <meshStandardMaterial color={color}/>
                <Text fontSize={textSize} color={textColor} rotation={textRotation} font={textFont} position={textPosition} scale={[0.02,0.02,0.02]}>{text}</Text>
                {image && 
                    <Image color={logoColor} position={htmlPosition} rotation={htmlRotation} url={image} scale={htmlScale} imgScale={imgScale} transparent={true} />
                }
                <Text fontSize={textSizeSopra} color={textColorSopra} rotation={textRotationSopra} font={textFontSopra} position={textPositionSopra} scale={[0.02,0.02,0.02]}>{textSopra}</Text>
            </mesh>
        </group>
    )
}
/*     
<Html transform className="text-white" position={[htmlPosition[0],htmlPosition[1],position[2]]} >
                {<img className="position-relative" src={image} width={`${imageWidth}px`} height={`${imageHeight}px`}></img>}
            </Html>           
*/