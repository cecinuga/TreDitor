import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppProvider from './components/AppProvider'

document.querySelector<HTMLCanvasElement>(".canvas canvas")?.getContext("threejs", {preserveDrawingBuffer: true});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider >
      <App /> 
    </AppProvider>
  </React.StrictMode>,
)
