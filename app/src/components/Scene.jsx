import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Cavaliere from './Cavaliere/Cavaliere';
export const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

export default function Scene(){
    const meshPos = [-5,-5,8]
    return(
        <>
            <OrbitControls target={meshPos} />
            <PerspectiveCamera makeDefault fov={33} position={[0,0,0]} />

            <ambientLight color="white" intensity={1}/>
            <Cavaliere meshPos={meshPos} meshScale={[1,1,1]} baseColor={"red"} frontColor={"green"} backColor={"blue"} qrCodeSize={"25px"}/>
        </>
    )
}