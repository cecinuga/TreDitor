import { Html } from "@react-three/drei"
import { useRef } from "react"
import { Col, Row } from "react-bootstrap"

export default function CavaliereLayer({position, rotation, scale, htmlPosition, color, source, sourceSize, childrens}){
    const frontRef = useRef(null)

    return(
        <mesh position={position} rotation={rotation} scale={scale} ref={frontRef}>
            <boxGeometry />
            <meshStandardMaterial color={color}/>
            <Html occlude="raycast" transform className="text-white" center position={htmlPosition}>
                {/*{childrens.map(child => child)}*/}
            </Html>
        </mesh>
    )
}