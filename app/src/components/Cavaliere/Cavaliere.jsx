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
        frontTextSize,
        frontTextColor,
        baseTextSize,
        baseTextColor,
        frontText,
        baseText,
        baseTextPosition,
        frontTextPosition,
        baseHtmlScale,
        frontHtmlScale,
        backHtmlScale,
        frontLogoColor,
        frontTextSopra,
        frontTextSizeSopra,
        frontTextColorSopra,
        frontTextPositionSopra,
        rotation,
        isTexture,
        currentRef
    }){
    const ciottolo = useLoader(GLTFLoader, ciottolo_model)

    return(
        <>
            <group ref={currentRef} position={meshPos} scale={meshScale} rotation={rotation}>
                <CavaliereLayer
                    id="1"
                    isTexture={isTexture} 
                    position={[0,0,0]} 
                    insidePos={[0,0,-1]}
                    rotation={[angleToRadians(90), 0, 0]}
                    scale={[0.5,0.44,0.002]}
                    imgPos={[baseImagePos.x, baseImagePos.y, 1]}
                    htmlRotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
                    imgParentScale={[baseHtmlScale[0], baseHtmlScale[1]]}
                    color={baseColor}
                    image={baseImage}
                    text={baseText}
                    textSize={baseTextSize}
                    textColor={baseTextColor}
                    textPosition={[baseTextPosition.x, baseTextPosition.y, -1]}
                />
                <CavaliereLayer
                    id="2"
                    isTexture={isTexture} 
                    position={[0,0.3155,-0.111]} 
                    insidePos={[0,0,1]}
                    rotation={[angleToRadians(19.45), 0, 0]} 
                    scale={[0.5,0.663,0.002]}
                    imgPos={[frontImagePos.x, frontImagePos.y, -1.6]}
                    htmlRotation={[angleToRadians(0), angleToRadians(180), angleToRadians(0)]}
                    imgParentScale={[frontHtmlScale[0], frontHtmlScale[1], frontHtmlScale[2]]}
                    color={frontColor}
                    image={frontImage}
                    text={frontText}
                    textSize={frontTextSize}
                    textColor={frontTextColor}
                    textPosition={[frontTextPosition.x, frontTextPosition.y, -0.6]}
                    logoColor={frontLogoColor}
                    textRotation={[0,angleToRadians(180), 0]}
                    textRotationSopra={[0,angleToRadians(180), 0]}
                    textPositionSopra={[frontTextPositionSopra.x, frontTextPositionSopra.y, -0.6]}
                    textSopra={frontTextSopra}
                    textSizeSopra={frontTextSizeSopra}
                    textColorSopra={frontTextColorSopra}
                    paddingColor={"white"}
                    imgScale={[0.01,0.01]}
                    paddingPos={[0,0,-0.7]}
                    paddingSize={[1,0.72]}
                    paddingDir={[0,angleToRadians(180),0]}
                    dashedPos={[-0.26, -0.45, -0.5]}
                />
                <CavaliereLayer
                    id="3"
                    isTexture={isTexture} 
                    position={[0,0.3155,0.111]}
                    insidePos={[0,0,-1]} 
                    rotation={[angleToRadians(-19.45), 0, 0]} 
                    scale={[0.5,0.663,0.002]}
                    imgScale={[backHtmlScale[0], backHtmlScale[1]]}
                    imgPos={[backImagePos.x, backImagePos.y, 1]}
                    htmlRotation={[angleToRadians(0), angleToRadians(0), angleToRadians(0)]}
                    htmlScale={[backHtmlScale[0], backHtmlScale[1]]}
                    color={backColor}
                    image={backImage}
                    paddingSize={[0.7, 0.7]}  
                />

                <primitive object={ciottolo.scene} scale={[0.18,0.18,0.18]} position={[0,0.06,0]}/>
            </group>
        </>
    )
}