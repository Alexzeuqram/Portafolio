import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Portafolio } from '../components/Portafolio';
import { Curriculum } from '../components/Curriculum';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        
        <HeaderNav/>

        <section className='content'>
            <Routes>
                <Route path="/" element={<Navigate to="/portafolio"/>}/>
                <Route path='/portafolio' element={<Portafolio/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path='/proyecto/:id' element={<Proyecto/>}/>

                <Route path='*' element={<h1>Error 404</h1>} />
         </Routes>
        </section>

        <Footer/>
    </BrowserRouter>
  )
}
