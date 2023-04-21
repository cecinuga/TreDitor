import { Col, Container, Row } from "react-bootstrap";
import { ReactElement, useContext, useEffect, useState } from "react";
import { Button, Dialog, DialogTitle, List, ListItem, ListItemButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { CavaliereContext } from "./Cavaliere/CavaliereContext";
import { saveAs } from "file-saver";
import {AiOutlineClose} from "react-icons/ai"
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
    const [open, setOpen] = useState<boolean>(false)
    const [pezzi, setPezzi] = useState<number>()

    const switchQr = () => {
        if(qrState=="Order") {
            setQrState("No Order"); 
            setConfig((c)=>({...c, qr: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${config.job}@`}))
            return
        }
        setQrState("Order")
        setConfig((c)=>({...c, qr: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/${config.job}`}))
    }

    const avviaStampa = async () => {
        await stampa(config.job, pezzi)
        closeDialog()
    }

    const closeDialog = () => {
        setOpen(false)
    }

    return (
        <>
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
                    {!state || state.stato!="stampa"?<Button href="" onClick={()=>navigate("/stampa", {state: {stato: "stampa"}})} variant="contained" className="font-primary mx-3">Tipografia</Button>: ""}
                    {state && state.stato=="stampa"?<Button href="" onClick={async ()=>setOpen(true)} variant="contained" color="secondary" className="font-primary mx-3">Manda In Stampa</Button>:""}
                </Col>
            </Row>
            <Dialog onClose={closeDialog} open={open}>
                <DialogTitle className="font-primary text-center position-relative overflow-hidden">
                    Quanti pezzi vuoi stampare? 
                    <Button onClick={closeDialog} className="position-absolute top-0 left-0"><AiOutlineClose size={36} color={"red"} /></Button></DialogTitle>
                <div>
                    <Col xs={6} className="d-inline-block"><input type="number" className="p-3 border-0 bg-gray text-white font-bold font-primary" id="pezzi" value={pezzi} onChange={(e)=>setPezzi(Number(e.currentTarget.value))} /></Col>
                    <Col xs={6} className="text-center p-4 d-inline-block">
                        <Button onClick={avviaStampa} variant="contained" color="success" className="font-primary mx-auto px-5 py-3">Invia</Button>
                    </Col>
                </div>
            </Dialog>
        </>
    );
}