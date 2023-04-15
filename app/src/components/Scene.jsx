import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Cavaliere from './Cavaliere/Cavaliere';
import { useControls, folder, buttonGroup } from 'leva';
import Grid from './Cavaliere/Grid';

export default function Scene({logo, style, qrorder}){
    const [object, setObject] = useControls("Object", () => ({
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
            value: style.main,
            transient:false,
            onChange: (v) => {},
        }, 
        testo_sotto: folder({
            testo_sotto: 'Menumal.it/test',
            positione_testo_sotto: {value: {x:0, y:-0.38}},
            grandezza_testo_sotto: { value: 2.3, min: 0, max: 5, step: 1 },
            colore_testo_sotto: { value: '#fff' },
          }),
          
        testo_sopra: folder({
            testo_sopra: 'Menù',
            positione_testo_sopra: {value: {x:0, y:0.38}},
            grandezza_testo_sopra: { value: 5, min: 0, max: 30, step: 1 },
            colore_testo_sopra: { value: '#fff' },
          }),
    }))

 
   const [back, setBack] = useControls('Back-End', () => ({
        color: {
            value:style.main,
            transient:false,
            onChange: (v) => {},
        }, 
        image: folder({
            colore_logo: style.main,
            positione_logo: { x: 0, y: 0,},
       }),
        text: folder({
            text: 'Il Tuo Ristorante',
            text_position: {x:0, y:-0.38},
            size: { value: 4, min: 0, max: 4, step: 1 },
            text_color: { value: '#fff' },
          }),
    }))


    const [base, setBase] = useControls("Base", () => ({
        color: {
            value:style.main,
            transient:false,
            onChange: (v) => {},
        }, 
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
                meshScale={[1,1,1]}
                
                backHtmlScale={[1.8,1]}
                backColor={back.color} 
                backImage={logo}
                backImagePos={back.positione_logo}
                backText={back.text}
                backTextSize={back.size}
                backTextColor={back.text_color}
                backTextPosition={back.text_position}
                backLogoColor={back.colore_logo}

                frontHtmlScale={[0.9,0.9,0.5]}
                frontColor={front.color} 
                frontImage={qrorder}
                frontImagePos={{ x: 0,y: -0.03}}      
                frontText={front.testo_sotto}
                frontTextSize={front.grandezza_testo_sotto}
                frontTextColor={front.colore_testo_sotto}
                frontTextPosition={front.positione_testo_sotto}
                frontTextSopra={front.testo_sopra}
                frontTextSizeSopra={front.grandezza_testo_sopra}
                frontTextColorSopra={front.colore_testo_sopra}
                frontTextPositionSopra={front.positione_testo_sopra}

                baseHtmlScale={[0,0]}
                baseColor={base.color} 
                baseImage={""}
                baseImagePos={""}
                baseText={""}
                baseTextSize={[0,0,0]}
                baseTextColor={""}
                baseTextPosition={[0,0,0]}
            />
        </>
    )
}