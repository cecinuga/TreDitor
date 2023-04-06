import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Cavaliere from './Cavaliere/Cavaliere';
import { useControls } from 'leva';
import qrcode from '../assets/qrcode.png'
export default function Scene(){
    const [scale, setScale] = useControls("Scala", () => ({
        scale: {
            value: [1,1,1],
            transient:false,
            onChange: (v) => {},
        }
    }))

    const [front, setFront] = useControls("Front-End", () => ({
        color: {
            value:"red",
            transient:false,
            onChange: (v) => {},
        }, 
    }))
    const [frontImage, setFrontImage] = useControls("Front Image", ()=>({
        image: {
            value: qrcode,
            transient: false,
            onChange: (v) => {}
        }
    }))

 
   const [back, setBack] = useControls('Back-End', () => ({
        color: {
            value:"green",
            transient:false,
            onChange: (v) => {},
        }, 
    }))
    const [backImage, setBackImage] = useControls("Back Image", ()=>({
        image: {
            value: qrcode,
            transient: false,
            onChange: (v) => {}
        }
    }))

    const [base, setBase] = useControls("Base", () => ({
        color: {
            value:"blue",
            transient:false,
            onChange: (v) => {},
        }, 
    }))

    const [baseImage, setBaseImage] = useControls("Base Image", ()=>({
        image: {
            value: qrcode,
            transient: false,
            onChange: (v) => {}
        }
    }))

    const [position, setPosition] = useControls("Positioning Object", () =>({
        position: {
            value:{
                x: -5,
                y: -5,
            },
            transient: false,
            onChange: (v) => {},
        }
    }))


    return( 
        <> 
            <OrbitControls target={[position.position.x,position.position.y,6]} />
            <PerspectiveCamera makeDefault fov={33} position={[0,0,0]} />

            <ambientLight color="white" intensity={1}/>
            <Cavaliere 
                meshPos={[position.position.x,position.position.y,6]} 
                meshScale={scale.scale} baseColor={base.color} 
                frontColor={front.color} 
                backColor={back.color} 
                frontImage={frontImage.image}
                backImage={backImage.image}
                baseImage={baseImage.image}
            />
        </>
    )
}