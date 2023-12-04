import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import ReactGA from 'react-ga'
import Nav from './components/Nav'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import ErrorPage from './pages/ErrorPage'
import './App.css'

function App() {

  ReactGA.initialize('G-E3QLPD2WBD')

  const getYear = () => {
    return new Date().getFullYear()
  }


  const handleClick = () => {
    fetch('public/Brian_Cherchiglia_Resume_SE2023.pdf').then(res => {
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = '/Brian_Cherchiglia_Resume_SE2023.pdf';
        alink.click()
      })
    })
  }

  return (
    <div>
      <header>
        <Nav />
      </header>
      <br />
      <main>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <br />
      <br />
      <footer className="footer">
        © {getYear()} Cherch, all rights reserved.
        <a className="footerLink" target="_blank" href="mailto:b.cherchiglia@gmail.com">EMAIL</a>
      </footer>
    </div>
  )
}

export default App
