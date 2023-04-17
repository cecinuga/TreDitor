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

        backLogoColor: string,
        backLogoPos: { x: number, y: number,},
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

        backLogoColor: string,
        backLogoPos: { x: number, y: number,},
        frontTextUpPos: {x:number, y:number},
        frontTextUpSize: number,
        frontTextUpColor: string,
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

        backLogoColor: "",
        backLogoPos: { x: 0, y: 0,},
    },
    setConfig: () => {}
})