import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">HOME</Link>
      <Link to="/portfolio">PORTFOLIO</Link>
      <Link to="/bio">BIO</Link>
    </div>
  )
}

export default Nav
