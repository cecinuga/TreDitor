import { Suspense } from 'react';
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Canvas} from "@react-three/fiber"
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import EditorPage from './components/EditorPage';
import DemoPage from './components/DemoPage';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import HeaderWithButton from './components/HeaderWithButton';

declare const baseUrl: string;

function App() {

  return (
    <>
        <BrowserRouter basename={typeof baseUrl === "undefined" ? "/" : baseUrl}>
          <Container fluid>
            <HeaderWithButton />
            <Routes>
              <Route path='/' element={<EditorPage />}></Route>
              <Route path='/demo' element={<DemoPage />}></Route>
            </Routes>
          </Container>
      </BrowserRouter>
    </>
  )
}

export default App
