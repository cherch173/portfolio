import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">PORTFOLIO</Link>
      <Link to="/bio">BIO</Link>
      <Link to="mailto:cherchofficial@gmail.com">CONTACT</Link>
    </div>
  )
}

export default Nav
