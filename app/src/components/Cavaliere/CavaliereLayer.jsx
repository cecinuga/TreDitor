import { Html } from "@react-three/drei"
import { useRef } from "react"
export default function CavaliereLayer({position, rotation, scale, htmlPosition, color, image}){
    const frontRef = useRef(null)

    return(
        <mesh position={position} rotation={rotation} scale={scale} ref={frontRef}>
            <boxGeometry />
            <meshStandardMaterial color={color}/>
            <Html occlude="raycast" transform className="text-white" center position={htmlPosition}>
                {<img src={image} width={"10%"} height="100%"></img>}
            </Html>
        </mesh>
    )
}