import { ReactElement, useState } from "react"
import { CavaliereContext } from "./Cavaliere/CavaliereContext"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"

type AppProviderProps = {
    children: ReactElement
}
declare const baseUrl: string;
const queryClient = new QueryClient()

export default function AppProvider(props: AppProviderProps){
    const [config, setConfig] = useState({
        job:"test",
        qr: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/$test@",
        frontColor: "#00a2ff",
        backColor: "#00a2ff",
        baseColor: "#00a2ff",
    
        frontTextUp: "Menù",
        frontTextUpPos: {x:0, y:0.38},
        frontTextUpSize: 5,
        frontTextUpColor: "white",
        
        frontTextDown:  "Menumal.it/test",
        frontTextDownPos: {x:0, y:-0.38},
        frontTextDownSize: 2.3,
        frontTextDownColor: "white",
        frontImagePos: { x: 0,y: -0.03},
    
        backLogoColor: "#00a2ff",
        backLogoPos: { x: 0, y: 0,},
      })
    return(
        <CavaliereContext.Provider value={{config, setConfig}} >
            <BrowserRouter basename={typeof baseUrl === "undefined" ? "/" : baseUrl}>
                <QueryClientProvider client={queryClient}>
                    {props.children}
                </QueryClientProvider> 
            </BrowserRouter>
        </CavaliereContext.Provider>
    )
}