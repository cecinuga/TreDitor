import { angleToRadians } from "../../lib/lib";
import CavaliereLayer from "./CavaliereLayer";

export default function Cavaliere({meshPos, meshScale, baseColor, frontColor, backColor, frontImage, backImage, baseImage, frontImagePos, backImagePos, baseImagePos, backTextSize,backTextFont,backTextColor, frontTextSize,frontTextFont,frontTextColor,baseTextSize,baseTextFont,baseTextColor, frontText, baseText, backText,backTextPosition,baseTextPosition,frontTextPosition, backTextRotation, frontTextRotation, baseTextRotation,frontImageWidth, frontImageHeight, baseImageWidth, baseImageHeight, backImageWidth, backImageHeight}){

    return(
        <>
            <group position={meshPos} scale={meshScale}>
                <CavaliereLayer 
                    position={[0,0,0]} 
                    rotation={[angleToRadians(90), 0, 0]}
                    scale={[0.5,0.45,0.01]}
                    htmlPosition={[baseImagePos.x, baseImagePos.y, 26.5]}
                    color={baseColor}
                    image={baseImage}
                    imageHeight={baseImageHeight}
                    imageWidth={baseImageWidth}
                    text={baseText}
                    textSize={baseTextSize}
                    textColor={baseTextColor}
                    textFont={baseTextFont}
                    textPosition={[baseTextPosition.x, baseTextPosition.y, -1]}
                    textRotation={[angleToRadians(baseTextRotation.x), angleToRadians(baseTextRotation.y), 0]}
                />
                <CavaliereLayer 
                    position={[0,0.2364,-0.16]} 
                    rotation={[angleToRadians(15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[frontImagePos.x, frontImagePos.y, 26.5]}
                    color={frontColor}
                    image={frontImage}
                    imageHeight={frontImageHeight}
                    imageWidth={frontImageWidth}
                    text={frontText}
                    textSize={frontTextSize}
                    textColor={frontTextColor}
                    textFont={frontTextFont}
                    textPosition={[frontTextPosition.x, frontTextPosition.y, -0.6]}
                    textRotation={[angleToRadians(frontTextRotation.x), angleToRadians(frontTextRotation.y), 0]}
                />
                <CavaliereLayer 
                    position={[0,0.2364,0.16]} 
                    rotation={[angleToRadians(-15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[backImagePos.x, backImagePos.y, 26.5]}
                    color={backColor}
                    image={backImage}
                    imageHeight={backImageHeight}
                    imageWidth={backImageWidth}
                    text={backText}
                    textSize={backTextSize}
                    textColor={backTextColor}
                    textFont={backTextFont}
                    textPosition={[backTextPosition.x, backTextPosition.y, 0.6]}
                    textRotation={[angleToRadians(backTextRotation.x), angleToRadians(backTextRotation.y), 0]}
                />
            </group>
        </>
    )
}