import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { RepeatWrapping, TextureLoader } from "three"
import grid from './models/grid-texture.png'

export default function Grid(){
    const diffuse = useLoader(TextureLoader, grid)

    useEffect(() => {
        diffuse.wrapS = RepeatWrapping
        diffuse.wrapT = RepeatWrapping
        diffuse.anisotropy = 4
        diffuse.repeat.set(500, 500)
        diffuse.offset.set(0, 0)
    }, [diffuse])

    return(
        <mesh rotation-x={-Math.PI * 0.5} position={[20, -10, -15]}>
            <planeGeometry args={[500, 500]} />
            <meshBasicMaterial 
                color={[1, 1, 1]}
                opacity={0.15}
                map={diffuse}
                transparent={true}
            />
        </mesh>
    )
}