import { Dispatch, SetStateAction, Suspense, createContext, useContext, useEffect, useState } from 'react';
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
import StampaPage from './components/StampaPage';

export type Stile = {
  fontCategoryHover: string 
}

export default function App() {
  const {config} = useContext(CavaliereContext)

  const {data, isLoading: isLoadingStile} = useQuery<Stile>("stiledemo", async ()  => {
    const stile = await getStyle(config.job)
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
              <Route path="/stampa" element={<StampaPage logo={`https://menumal.it/data/img/logo-${config.job}.png`} />}/>
            </Routes>
          </Page>
        </Container>
      }
    </>
  )
}