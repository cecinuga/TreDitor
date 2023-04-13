import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Cavaliere from './Cavaliere/Cavaliere';
import { useControls, folder, buttonGroup } from 'leva';
import {fonts} from "./Cavaliere/font"
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import Grid from './Cavaliere/Grid';

export default function Scene({logo, style, qrorder, qrnoorder}){
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
            value:style.main,
            transient:false,
            onChange: (v) => {},
        }, 
        image: folder({
            logoColor: style.main,
            position_img: { x: 0, y: 0.1},
            scale_img: {x: 0.8, y: 0.4}
       }),
        text: folder({
            text: 'Osteria Francescana',
            text_position: {x:0, y:-0.38},
            size: { value: 4, min: 0, max: 30, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts },
          }),
        font: { options: fonts }
    }))

 
   const [back, setBack] = useControls('Back-End', () => ({
        color: {
            value: style.main,
            transient:false,
            onChange: (v) => {},
        }, 
        image: folder({
            position_img: { x: 0,y: -0.03},
            scale_img: {x: 0.5, y: 0.5, z: 0.5},
        }),
        testo_sotto: folder({
            text_sotto: 'Menumal.it/osteriafrancescana',
            text_position_sotto: {value: {x:0, y:-0.38}},
            size_sotto: { value: 2.3, min: 0, max: 30, step: 1 },
            text_color_sotto: { value: '#fff' },
            font_sotto: { options: fonts },
          }),
        testo_sopra: folder({
            text_sopra: 'MenuMal',
            text_position_sopra: {value: {x:0, y:0.38}},
            size_sopra: { value: 5, min: 0, max: 30, step: 1 },
            text_color_sopra: { value: '#fff' },
            font_sopra: { options: fonts },
          }),
        font: { options: fonts }
    }))


    const [base, setBase] = useControls("Base", () => ({
        color: {
            value:style.main,
            transient:false,
            onChange: (v) => {},
        }, 
        image: folder({
            image: "",
            position_img: { x: 0,y: 0.1},
            scale_img: {x: 0.7, y: 0.7},
        }),
        text: folder({
            text: '',
            text_position: {x:0, y:-0.38},
            size: { value: 5, min: 0, max: 30, step: 1 },
            text_color: { value: '#fff' },
            font: { options: fonts },
          }),
        font: { options: fonts }
    }))

    const saveConfig = () => {
        
    }
    const resetConfig = () => {
        
    }

    useControls({
        "Azioni": buttonGroup({
            "Save Config": saveConfig,
            "Reset Config": resetConfig
        })
    })


    return( 
        <> 
            <OrbitControls target={[object.position.x,object.position.y,6]} />
            <PerspectiveCamera makeDefault fov={33} position={[0,0,0]} />
            <ambientLight color="white" intensity={1}/>

            <Grid />

            <Cavaliere 
                meshPos={[object.position.x,object.position.y,6]} 
                meshScale={object.scale} 
                
                frontHtmlScale={[front.scale_img.x, front.scale_img.y]}
                frontColor={front.color} 
                frontImage={logo}
                frontImagePos={front.position_img}
                frontText={front.text}
                frontTextSize={front.size}
                frontTextFont={front.font}
                frontTextColor={front.text_color}
                frontTextPosition={front.text_position}
                frontLogoColor={front.logoColor}

                backHtmlScale={[back.scale_img.x, back.scale_img.y]}
                backColor={back.color} 
                backImage={qrorder}
                backImagePos={back.position_img}      
                backText={back.text_sotto}
                backTextSize={back.size_sotto}
                backTextFont={back.font_sotto}
                backTextColor={back.text_color_sotto}
                backTextPosition={back.text_position_sotto}
                backTextSopra={back.text_sopra}
                backTextSizeSopra={back.size_sopra}
                backTextFontSopra={back.font_sopra}
                backTextColorSopra={back.text_color_sopra}
                backTextPositionSopra={back.text_position_sopra}

                baseHtmlScale={[base.scale_img.x, base.scale_img.y]}
                baseColor={base.color} 
                baseImage={base.image}
                baseImagePos={base.position_img}
                baseText={base.text}
                baseTextSize={base.size}
                baseTextFont={base.font}
                baseTextColor={base.text_color}
                baseTextPosition={base.text_position}
            />
        </>
    )
}