import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function HeaderWithButton(){
    const navigate = useNavigate()

    return (
        <>
            <Header>
                <span className='fs-1 text-white'>TreDitor</span>
            </Header>
            <Row>
                <Col xs={12} className="text-center mt-2">
                <Button href="" onClick={()=>navigate("/")} variant="contained" color="success" className='font-primary mx-3'>Editor</Button>
                <Button href="" onClick={()=>navigate("/demo")} variant="contained" color="error" className="font-primary ">Demo</Button>
                </Col>
            </Row>
        </>
    )
}