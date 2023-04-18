import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Cavaliere from './Cavaliere/Cavaliere';
import { useControls, folder, buttonGroup } from 'leva';
import Grid from './Cavaliere/Grid';
import { useContext, useEffect } from 'react';
import { CavaliereContext } from './Cavaliere/CavaliereContext';

export default function Scene({logo, style}){
    const {config, setConfig} = useContext(CavaliereContext)

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
            value: config.frontColor,
            transient:false,
            onChange: (v) => setConfig((c)=>({...c, frontColor: v})),
        }, 
        testo_sotto: folder({
            testo_sotto: {value:config.frontTextDown},
            posizione_testo_sotto: {value: config.frontTextDownPos, onChange:(v)=>setConfig((c)=>({...c, frontTextDownPos:v})), transient: false},
            grandezza_testo_sotto: { value: config.frontTextDownSize, min: 0, max: 5, step: 1, onChange:(v)=>setConfig((c)=>({...c, frontTextDownSize:v} )), transient: false},
            colore_testo_sotto: { value: style.fontCategoryHover, onChange:(v)=>setConfig((c)=>({...c, frontTextDownColor:v} )) , transient: false},
          }),
          
        testo_sopra: folder({
            testo_sopra: config.frontTextUp,
            positione_testo_sopra: { value: config.frontTextUpPos, onChange:(v)=>setConfig((c)=>({...c, frontTextUpPos:v})), transient: false },
            grandezza_testo_sopra: { value: config.frontTextUpSize, min: 0, max: 30, step: 1, onChange:(v)=>setConfig((c)=>({...c, frontTextUpSize:v})), transient: false },
            colore_testo_sopra: { value: style.fontCategoryHover, onChange:(v)=>setConfig((c)=>({...c, frontTextUpColor:v})), transient: false },
          }),
    }))

 
   const [back, setBack] = useControls('Back-End', () => ({
        color: {
            value: config.backColor,
            transient:false,
            onChange: (v) => setConfig((c)=>({...c, backColor: v})),
        }, 
        image: folder({
            colore_logo: {value:config.backLogoColor, onChange: (v)=>setConfig((c)=>({...c, backLogoColor:v})), transient: false},
            positione_logo: {value: config.backLogoPos, onChange: (v)=>setConfig((c)=>({...c, backLogoColor:v})), transient: false},
       }),
    }))


    const [base, setBase] = useControls("Base", () => ({
        color: {
            value: config.baseColor,
            transient:false,
            onChange: (v) => setConfig((c) => ({...c, baseColor:v})),
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

    console.log(front)


    return( 
        <> 
            <OrbitControls target={[object.position.x,object.position.y,6]} />
            <PerspectiveCamera makeDefault fov={33} position={[-3.5,-3.5,5]} />
            <ambientLight color="white" intensity={1} castShadow/>
            <directionalLight color="white" intensity={1} castShadow />

            <Grid />

            <Cavaliere 
                isTexture={true}
                meshPos={[object.position.x,object.position.y,6]} 
                meshScale={[1,1,1]}
                
                backHtmlScale={[1.8,1]}
                backColor={back.color} 
                backImage={logo}
                backImagePos={back.positione_logo}
                backLogoColor={back.colore_logo}

                frontHtmlScale={[0.9,0.9,0.5]}
                frontColor={front.color} 
                frontImage={config.qr}
                frontImagePos={config.frontImagePos}      
                frontText={front.testo_sotto}
                frontTextSize={front.grandezza_testo_sotto}
                frontTextColor={front.colore_testo_sotto}
                frontTextPosition={front.posizione_testo_sotto}
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