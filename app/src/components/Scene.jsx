import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Cavaliere from './Cavaliere/Cavaliere';
import { useControls, folder } from 'leva';
import qrcode from '../assets/qrcode.png'
import {fonts} from "./Cavaliere/font"

export default function Scene(){
    const [object, setObject] = useControls("Object", () => ({
        scale: {
            value: [1,1,1],
            transient:false,
            onChange: (v) => {},
        },
        position: {
            value:{
                x: -5,
                y: -5,
            },
            transient: false,
            onChange: (v) => {},
        }
    }))

    const [front, setFront] = useControls("Front-End", () => ({
        color: {
            value:"red",
            transient:false,
            onChange: (v) => {},
        }, 
        image: {
            value: qrcode,
            transient: false,
            onChange: (v) => {}
        },
        position: {
            value: {
                x: 2.5,
                y: 0.05
            } ,
            transient: false,
            onChange: (v) => {},         
        },
        text: folder({
            value: 'MenuMal',
            size: { value: 108, min: 50, max: 300, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts }
          }),
        font: { options: fonts }
    }))

 
   const [back, setBack] = useControls('Back-End', () => ({
        color: {
            value:"red",
            transient:false,
            onChange: (v) => {},
        }, 
        image: {
            value: qrcode,
            transient: false,
            onChange: (v) => {}
        },
        position: {
            value: {
                x: 2.5,
                y: 0.05
            } ,
            transient: false,
            onChange: (v) => {},         
        },
        text: folder({
            value: 'MenuMal',
            size: { value: 108, min: 50, max: 300, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts }
          }),
        font: { options: fonts }
    }))


    const [base, setBase] = useControls("Base", () => ({
        color: {
            value:"red",
            transient:false,
            onChange: (v) => {},
        }, 
        image: {
            value: qrcode,
            transient: false,
            onChange: (v) => {}
        },
        position: {
            value: {
                x: 2.5,
                y: 0.05
            } ,
            transient: false,
            onChange: (v) => {},         
        },
        text: folder({
            value: 'MenuMal',
            size: { value: 108, min: 50, max: 300, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts },
            position: {x: 0, y:0}
          }),
        font: { options: fonts }
    }))


    return( 
        <> 
            <OrbitControls target={[object.position.x,object.position.y,6]} />
            <PerspectiveCamera makeDefault fov={33} position={[0,0,0]} />

            <ambientLight color="white" intensity={1}/>
            <Cavaliere 
                meshPos={[object.position.x,object.position.y,6]} 
                meshScale={object.scale} 
                

                frontColor={front.color} 
                frontImage={front.image}
                frontImagePos={front.position}
                frontText={front.value}
                frontTextSize={front.size}
                frontTextFont={front.font}
                frontTextColor={front.text_color}

                backColor={back.color} 
                backImage={back.image}
                backImagePos={back.position}
                backText={back.value}
                backTextSize={back.size}
                backTextFont={back.font}
                backTextColor={back.text_color}

                baseColor={base.color} 
                baseImage={base.image}
                baseImagePos={base.position}
                baseText={base.value}
                baseTextSize={base.size}
                baseTextFont={base.font}
                baseTextColor={base.text_color}
            />
        </>
    )
}