import { Dispatch, SetStateAction, Suspense, createContext, useEffect, useState } from 'react';
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
import { getStyle } from './lib/lib';
import Page from './components/Page';

export type Stile = {
  fontCategoryHover: string 
}

export default function App() {

  const {data, isLoading: isLoadingStile} = useQuery<Stile>("stiledemo", async ()  => {
    const stile = await getStyle("test")
    return {fontCategoryHover: stile.fontCategoryHover}
  })

  return (
    <>
      {!isLoadingStile && 
        <Container fluid>
          <Header>TreDitor</Header>
          <Page>
            <Routes>
              <Route path='/' element={<EditorPage stile={data!}/>}/>
              <Route path="/demo" element={<DemoPage stile={data!}/>}/>
            </Routes>
          </Page>
        </Container>
      }
    </>
  )
}