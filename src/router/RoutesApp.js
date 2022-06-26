import React from 'react'
import {Routes,Route, HashRouter} from "react-router-dom";
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Skills } from '../components/Skills';

export const RoutesApp = () => {
  return (
  <>
    <HashRouter>
    {/* HEADER Y NAVEGACION */}
    <HeaderNav />  

    {/* CONTENIDO CENTRAL */}
     <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Skills" element={<Skills />} />
         <Route path="/Contact" element={<Contact />} />
     </Routes>

     </HashRouter>
   {/* FOOTER */}
   </>
  )
}
