import { Dispatch, SetStateAction, createContext } from "react";

export type CavaliereContextType = {
    config: {
        job: string
        frontColor: string;
        backColor: string;
        baseColor: string;
        frontTextUp: string;
        frontTextDown: string;
        frontTextDownPos: {x:number, y:number},
        frontTextDownSize: number,
        frontTextDownColor: string,
        frontTextUpSize: number,
        frontTextUpPos: {x:number, y:number},
        frontTextUpColor: string,
        frontImagePos: {x:number, y:number},

        backLogoColor: string,
        backLogoPos: { x: number, y: number,},
        qr: string,
    },
    setConfig: Dispatch<SetStateAction<{ 
        job: string
        frontColor: string;
        backColor: string;
        baseColor: string;
        frontTextUp: string;
        frontTextDown: string;
        frontTextDownPos: {x:number, y:number},
        frontTextDownSize: number,
        frontTextDownColor: string,
        frontImagePos: {x:number, y:number},

        backLogoColor: string,
        backLogoPos: { x: number, y: number,},
        frontTextUpPos: {x:number, y:number},
        frontTextUpSize: number,
        frontTextUpColor: string,
        qr: string,
    }>>
}
  
export const CavaliereContext = createContext<CavaliereContextType>(
{
    config: {
        job: "", 
        frontColor: "",
        backColor: "",
        baseColor: "",
        frontTextUp: "",
        frontTextDown: "",
        frontTextDownPos: {x:0, y:0},
        frontTextDownSize: 0,
        frontTextDownColor: "",
        frontTextUpSize: 0,
        frontTextUpPos: {x:0, y:0},
        frontTextUpColor: "",
        frontImagePos: {x:0, y:0},
        backLogoColor: "",
        backLogoPos: { x: 0, y: 0,},
        qr: ""
    },
    setConfig: () => {}
})