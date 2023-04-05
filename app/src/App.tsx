import { Suspense } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Canvas} from "@react-three/fiber"
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import EditorPage from './components/EditorPage';
import DemoPage from './components/DemoPage';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import Header from './components/Header';

declare const baseUrl: string;

function App() {

  return (
    <>
        <BrowserRouter basename={typeof baseUrl === "undefined" ? "/" : baseUrl}>
          <Container fluid>
            <Header>TreDitor</Header>
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
