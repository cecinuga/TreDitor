import { Col, Container, Row } from "react-bootstrap";
import { ReactElement } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export type HeaderProps = {
    children?: ReactElement | string;
}

export default function Header(props: HeaderProps){
    const navigate = useNavigate()


    return (
        <Row className="bg-gradient-primary border-b-2-white">
            <Col xs={3} className="text-center text-white position-relative fs-2 font-semibold font-secondary color-primary pt-3">
                <div className="d-inline-block fs-2 font-primary">MenuMal</div><div className="d-inline-block mx-3 fs-5">x</div>  <div className="d-inline-block fs-2 font-secondary">Drop<div className="d-inline-block font-third color-secondary-2">Link</div></div>                
            </Col>
            <Col xl={6} className="text-center text-white fs-1 position-relative font-semibold font-secondary color-primary pt-2" >
                {props.children}
            </Col>
            <Col xl={3} className="pt-3">
                <Button href="" onClick={()=>navigate("/")} variant="contained" color="success" className='font-primary mx-3'>Editor</Button>
                <Button href="" onClick={()=>navigate("/demo")} variant="contained" color="error" className="font-primary ">Demo</Button>
            </Col>
        </Row>
    );
}