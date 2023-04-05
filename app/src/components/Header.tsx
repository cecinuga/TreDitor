import { Col, Container, Row } from "react-bootstrap";
import { ReactElement } from "react";

export type HeaderProps = {
    children?: ReactElement;
}

export default function Header(props: HeaderProps){
    return (
        <Row className="bg-gradient-primary border-b-2-white">
            <Col xs={3} className="text-center text-white position-relative fs-2 font-semibold font-secondary color-primary pt-3">
                <div className="d-inline-block fs-2 font-primary">MenuMal</div><div className="d-inline-block mx-3 fs-5">x</div>  <div className="d-inline-block fs-2 font-secondary">Drop<div className="d-inline-block font-third color-secondary-2">Link</div></div>
            </Col>
            <Col xl={6} xs={8} className="text-center position-relative font-semibold font-secondary color-primary pt-2" >
                {props.children}
            </Col>
            <Col xl={3} xs={1}></Col>
        </Row>
    );
}