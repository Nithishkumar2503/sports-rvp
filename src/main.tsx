import { StrictMode } from 'react'
import "./variables.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainRoute,TurfRoute } from "./routes/index.js";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App children={
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainRoute/>} />
        <Route path='/turf'  element={<TurfRoute/>}/>
        <Route path='/cricket' />
      </Routes>

    </BrowserRouter>
    }/>
    
  </StrictMode>
)
