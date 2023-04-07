import { angleToRadians } from "../../lib/lib";
import CavaliereLayer from "./CavaliereLayer";

export default function Cavaliere({meshPos, meshScale, baseColor, frontColor, backColor, frontImage, backImage, baseImage, frontImagePos, backImagePos, baseImagePos, backTextSize,backTextFont,backTextColor, frontTextSize,frontTextFont,frontTextColor,baseextSize,baseTextFont,baseextColor, frontText, baseText, backText,}){

    return(
        <>
            <group position={meshPos} scale={meshScale}>
                <CavaliereLayer 
                    position={[0,0,0]} 
                    rotation={[angleToRadians(90), 0, 0]}
                    scale={[0.5,0.45,0.01]}
                    htmlPosition={[baseImagePos.x, baseImagePos.y, -0.6]}
                    color={baseColor}
                    sourceSize={"20px"}
                    image={baseImage}
                    text={baseText}
                />
                <CavaliereLayer 
                    position={[0,0.2364,-0.16]} 
                    rotation={[angleToRadians(15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[frontImagePos.x, frontImagePos.y, -0.6]}
                    color={frontColor}
                    sourceSize={"20px"}
                    image={frontImage}
                />
                <CavaliereLayer 
                    position={[0,0.2364,0.16]} 
                    rotation={[angleToRadians(-15), 0, 0]} 
                    scale={[0.5,0.5,0.01]} 
                    htmlPosition={[backImagePos.x, backImagePos.y, 0.6]}
                    color={backColor}
                    sourceSize={"20px"}
                    image={backImage}
                />
                <mesh position={[0,0.245,0.156]} rotation={[angleToRadians(-15), 0, 0]} scale={[0.5,0.5,0.01]}>
                    <boxGeometry />
                    <meshStandardMaterial color={backColor}/>
                </mesh>
            </group>
        </>
    )
}