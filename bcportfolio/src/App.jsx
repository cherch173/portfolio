import { useState, useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import Bio from './pages/Bio'
import Portfolio from './pages/Portfolio'
import './App.css'

function App() {

  const getYear = () => {
    return new Date().getFullYear()
  }


  const handleClick = () => {
    fetch('src/assets/Brian_Cherchiglia_Resume_SE2023.pdf').then(res => {
        res.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'src/assets/Brian_Cherchiglia_Resume_SE2023.pdf';
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
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>

        <br />
        <footer className="footer">
          © {getYear()} Cherch, all rights reserved --
          <a className="footerLink" target="_blank" href="mailto:cherchofficial@gmail.com">CONTACT</a>
          <a className="footerLink" target="_blank" onClick={handleClick}>RESUME</a>
        </footer>
      </main>
    </div>

  )
}

export default App
