import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter , Routes, Route } from "react-router";
import  Card  from './pages/Card.jsx';
import Companies from './pages/Companies.jsx';
import Customerservice from './pages/Customerservice.jsx';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Card />} />
   <Route  path="Companies" element={<Companies />} />

 
    <Route  path="Customerservice" element={<Customerservice />} />
 
  

  </Route>
</Routes>

      </BrowserRouter>

  </StrictMode>,
)