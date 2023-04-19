import { Col, Container, Row } from "react-bootstrap";
import { ReactElement, useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { CavaliereContext } from "./Cavaliere/CavaliereContext";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import { stampa } from "../lib/lib_";

export type HeaderProps = {
    children?: ReactElement | string;
}

export default function Header(props: HeaderProps){
    const {config, setConfig} = useContext(CavaliereContext)
    const navigate = useNavigate()
    const [qrState, setQrState] = useState<"Order" | "No Order">("Order")
    const location = useLocation()
    const state = location.state as { stato: string }

    const switchQr = () => {
        if(qrState=="Order") {
            setQrState("No Order"); 
            setConfig((c)=>({...c, qr: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${config.job}@`}))
            return
        }
        setQrState("Order")
        setConfig((c)=>({...c, qr: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${config.job}`}))
    }


    return (
        <Row className="bg-gradient-primary border-b-2-white">
            <Col xs={4} className="text-center text-white position-relative fs-2 font-semibold font-secondary color-primary pt-3">
                <div className="d-inline-block fs-2 font-primary">MenuMal</div><div className="d-inline-block mx-3 fs-5">x</div>  <div className="d-inline-block fs-2 font-secondary">Drop<div className="d-inline-block font-third color-secondary-2">Link</div></div>                
            </Col>
            <Col xl={4} className="text-center text-white fs-1 position-relative font-semibold font-secondary color-primary pt-2" >
                {props.children}
            </Col>
            <Col xl={4} className="pt-3 text-left">
                <Button onClick={switchQr} className="text-white mx-2">{qrState}</Button>
                <Button href="" onClick={()=>navigate("/")} variant="contained" color="success" className='font-primary mx-3'>Editor</Button>
                <Button href="" onClick={()=>navigate("/demo")} variant="contained" color="error" className="font-primary">Demo</Button>
                {!state || state.stato!="stampa"?<Button href="" onClick={()=>navigate("/stampa", {state: {stato: "stampa"}})} variant="contained" className="font-primary mx-3">Stampa</Button>: ""}
                {state && state.stato=="stampa"?<Button href="" onClick={()=>stampa()} variant="contained" color="secondary" className="font-primary mx-3">Manda In Stampa</Button>:""}
            </Col>
        </Row>
    );
}