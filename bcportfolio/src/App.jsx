import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Nav from './components/Nav'
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
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
        </div>
        <br />
        <footer className="footer">
          © {getYear()} Cherch, all rights reserved --
          <a className="footerLink" target="_blank" href="mailto:cherchofficial@gmail.com"> CONTACT</a>
        </footer>
      </main>
    </div>

  )
}

export default App
