import { Dispatch, SetStateAction, Suspense, createContext, useState } from 'react';
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
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Api } from './lib/api';
import { CavaliereContext } from './components/Cavaliere/CavaliereContext';

declare const baseUrl: string;
const queryClient = new QueryClient()

export default function App() {

  const [config, setConfig] = useState({
    job:"test",
    frontColor: "#00a2ff",
    backColor: "#00a2ff",
    baseColor: "#00a2ff",
    frontTextUp: "Menù",
    frontTextDown:  "Menumal.it/test",
  })


  return (
    <>
      <CavaliereContext.Provider value={{config, setConfig}} >
        <BrowserRouter basename={typeof baseUrl === "undefined" ? "/" : baseUrl}>
         <QueryClientProvider client={queryClient}>
            <Container fluid>
              <Header>TreDitor</Header>
              <Routes>
                <Route path='/' element={
                  <Suspense fallback={null}>
                    <EditorPage />
                  </Suspense>
                  }>
                </Route>
                <Route path='/demo' element={<DemoPage />}></Route>
              </Routes>
            </Container>
          </QueryClientProvider>
        </BrowserRouter>
      </CavaliereContext.Provider>
    </>
  )
}