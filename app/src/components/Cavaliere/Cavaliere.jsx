import { useLoader } from "@react-three/fiber";
import { angleToRadians, percent } from "../../lib/lib";
import CavaliereLayer from "./CavaliereLayer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ciottolo_model from './models/stone.glb'

export default function Cavaliere({
        meshPos,
        meshScale,
        baseColor,
        frontColor,
        backColor,
        frontImage,
        backImage,
        baseImage,
        frontImagePos,
        backImagePos,
        baseImagePos,
        backTextSize,
        backTextFont,
        backTextColor,
        frontTextSize,
        frontTextFont,
        frontTextColor,
        baseTextSize,
        baseTextFont,
        baseTextColor,
        frontText,
        baseText,
        backText,
        backTextPosition,
        baseTextPosition,
        frontTextPosition,
        baseHtmlScale,
        frontHtmlScale,
        backHtmlScale,
        frontLogoColor,
        frontTextSopra,
        frontTextSizeSopra,
        frontTextFontSopra,
        frontTextColorSopra,
        frontTextPositionSopra
    }){
    const ciottolo = useLoader(GLTFLoader, ciottolo_model)

    return(
        <>
            <group position={meshPos} scale={meshScale}>
                <CavaliereLayer 
                    position={[0,0,0]} 
                    insidePos={[0,0,-1]}
                    rotation={[angleToRadians(90), 0, 0]}
                    scale={[0.5,0.44,0.01]}
                    imgPos={[baseImagePos.x, baseImagePos.y, 1]}
                    htmlRotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
                    htmlScale={[baseHtmlScale[0], baseHtmlScale[1]]}
                    color={baseColor}
                    image={baseImage}
                    text={baseText}
                    textSize={baseTextSize}
                    textColor={baseTextColor}
                    textFont={baseTextFont}
                    textPosition={[baseTextPosition.x, baseTextPosition.y, -1]}
                />
                <CavaliereLayer 
                    position={[0,0.32,-0.111]} 
                    insidePos={[0,-0.03,1]}
                    rotation={[angleToRadians(19.45), 0, 0]} 
                    scale={[0.5,0.68,0.01]}
                    imgPos={[frontImagePos.x, frontImagePos.y, -1.05]}
                    htmlRotation={[angleToRadians(0), angleToRadians(180), angleToRadians(0)]}
                    htmlScale={[frontHtmlScale[0], frontHtmlScale[1]]}
                    color={frontColor}
                    image={frontImage}
                    text={frontText}
                    textSize={frontTextSize}
                    textColor={frontTextColor}
                    textFont={frontTextFont}
                    textPosition={[frontTextPosition.x, frontTextPosition.y, -0.6]}
                    logoColor={frontLogoColor}
                    textRotation={[0,angleToRadians(180), 0]}
                    textRotationSopra={[0,angleToRadians(180), 0]}
                    textPositionSopra={[frontTextPositionSopra.x, frontTextPositionSopra.y, -0.6]}
                    textSopra={frontTextSopra}
                    textSizeSopra={frontTextSizeSopra}
                    textColorSopra={frontTextColorSopra}
                    textFontSopra={frontTextFontSopra}
                    paddingColor={"white"}
                    imgScale={[0.09,0.09]}
                    paddingPos={[0,0,-0.6]}
                    paddingSize={[1,0.72]}
                    paddingDir={[0,angleToRadians(180),0]}
                />
                <CavaliereLayer 
                    position={[0,0.32,0.111]}
                    insidePos={[0,-0.03,-1]} 
                    rotation={[angleToRadians(-19.45), 0, 0]} 
                    scale={[0.5,0.68,0.01]}
                    imgScale={[backHtmlScale[0], backHtmlScale[1]]}
                    imgPos={[backImagePos.x, backImagePos.y, 1]}
                    htmlRotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
                    htmlScale={[backHtmlScale[0], backHtmlScale[1]]}
                    color={backColor}
                    image={backImage}
                    text={backText}
                    textSize={backTextSize}
                    textColor={backTextColor}
                    textFont={backTextFont}
                    textPosition={[backTextPosition.x, backTextPosition.y, 0.6]}   
                    paddingSize={[0.7, 0.7]}  
                />
                <primitive object={ciottolo.scene} scale={[0.06,0.06,0.06]} position={[0,0.022,0]}/>
            </group>
        </>
    )
}