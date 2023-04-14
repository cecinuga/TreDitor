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

declare const baseUrl: string;
const queryClient = new QueryClient()

type ConfigContextType = {
  config: {
    stile:  string;
    logo: string;
    qr: string;
  },
  setConfig: Dispatch<SetStateAction<{ stile: string; logo: string; qr: string; }>>
}

export const ConfigContext = createContext<ConfigContextType>(
  {config: {
    stile: "", 
    logo: "",
    qr: "",
  },
  setConfig: () => {}
}
)


export default function App() {

  const [config, setConfig] = useState({
    stile:"https://menumal.it/data/style/test/style.txt", 
    logo: "https://menumal.it/data/img/logo-test.png",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&color=000000&bgcolor=ffffff&data=menumal.it/test"
  })


  return (
    <>
      <ConfigContext.Provider value={{config, setConfig}} >
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
      </ConfigContext.Provider>
    </>
  )
}