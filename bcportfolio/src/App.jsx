import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import Bio from './pages/Bio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const getYear = () => {
    return new Date().getFullYear()
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
          <Route path="/bio" element={<Bio />} />
        </Routes>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {count} clicks
          </button>
        </div>
        <br />
        <footer className="footer">
          © {getYear()} Cherch, all rights reserved -- 
          <a className="footerLink" target="_blank" href="mailto:cherchofficial@gmail.com">CONTACT</a>
        </footer>
      </main>
    </div>

  )
}

export default App
