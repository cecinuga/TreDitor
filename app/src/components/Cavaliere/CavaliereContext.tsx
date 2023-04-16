import { Dispatch, SetStateAction, createContext } from "react";

export type CavaliereContextType = {
    config: {
        job: string
        frontColor: string;
        backColor: string;
        baseColor: string;
        frontTextUp: string;
        frontTextDown: string;
    },
    setConfig: Dispatch<SetStateAction<{ 
        job: string
        frontColor: string;
        backColor: string;
        baseColor: string;
        frontTextUp: string;
        frontTextDown: string;
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
    },
    setConfig: () => {}
})