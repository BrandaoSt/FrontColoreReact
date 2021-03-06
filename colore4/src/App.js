import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contato from './components/Contato'
import Avaliacoes from './components/Avaliacoes'
import ScrollTop from './components/ScrollTop'
/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <div>
      
      <Router>
      <ScrollTop/>
        <Navbar />
        <Routes>
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </Router>
      <Avaliacoes />
      <Footer />
    </div>
  )
}

export default App;
