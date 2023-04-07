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
        image: folder({
            image: qrcode,
            image_position: { x: 0.45,y: -0.55},
            width:{ value: 25, min: 0, max: 100, step: 1 },
            height:{ value: 25, min: 0, max: 100, step: 1 },
        }),
        text: folder({
            text: 'MenuMal',
            text_position: {x:0, y:-0.38},
            size: { value: 5, min: 5, max: 30, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts },
            textX: { value: 0, min: 0, max: 360, step: 1 },
            textY: { value: 0, min: 0, max: 360, step: 1 }            
          }),
        font: { options: fonts }
    }))

 
   const [back, setBack] = useControls('Back-End', () => ({
        color: {
            value:"red",
            transient:false,
            onChange: (v) => {},
        }, 
        image: folder({
            image: qrcode,
            image_position: { x: 0.45,y: -0.55},
            width:{ value: 25, min: 0, max: 100, step: 1 },
            height:{ value: 25, min: 0, max: 100, step: 1 },
        }),
        text: folder({
            text: 'MenuMal',
            text_position: {value: {x:0, y:-0.38}},
            size: { value: 5, min: 5, max: 30, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts },
            textX: { value: 0, min: 0, max: 360, step: 1 },
            textY: { value: 0, min: 0, max: 360, step: 1 }
          }),
        font: { options: fonts }
    }))


    const [base, setBase] = useControls("Base", () => ({
        color: {
            value:"red",
            transient:false,
            onChange: (v) => {},
        }, 
        image: folder({
            image: qrcode,
            image_position: { x: 0.45,y: -0.55},
            width:{ value: 25, min: 0, max: 100, step: 1 },
            height:{ value: 25, min: 0, max: 100, step: 1 },
        }),
        text: folder({
            text: '',
            text_position: {x:0, y:-0.38},
            size: { value: 5, min: 5, max: 30, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts },
            textX: { value: 0, min: 0, max: 360, step: 1 },
            textY: { value: 0, min: 0, max: 360, step: 1 }
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
                frontImagePos={front.image_position}
                frontImageWidth={front.width}
                frontImageHeight={front.height}
                frontText={front.text}
                frontTextSize={front.size}
                frontTextFont={front.font}
                frontTextColor={front.text_color}
                frontTextPosition={front.text_position}
                frontTextRotation={{x: front.textX, y: front.textY}}

                backColor={back.color} 
                backImage={back.image}
                backImagePos={back.image_position}
                backImageWidth={back.width}
                backImageHeight={back.height}
                backText={back.text}
                backTextSize={back.size}
                backTextFont={back.font}
                backTextColor={back.text_color}
                backTextPosition={back.text_position}
                backTextRotation={{x: back.textX, y: back.textY}}

                baseColor={base.color} 
                baseImage={base.image}
                baseImagePos={base.image_position}
                baseImageWidth={base.width}
                baseImageHeight={base.height}
                baseText={base.text}
                baseTextSize={base.size}
                baseTextFont={base.font}
                baseTextColor={base.text_color}
                baseTextPosition={base.text_position}
                baseTextRotation={{x: base.textX, y: base.textY}}
            />
        </>
    )
}