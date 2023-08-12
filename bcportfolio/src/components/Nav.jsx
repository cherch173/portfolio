import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">PORTFOLIO</Link>
      <Link to="/skills">SKILLS</Link>
      <Link to="/bio">BIO</Link>
      <Link to="mailto:cherchofficial@gmail.com">CONTACT</Link>
      <br />
        <Link to="http://www.linkedin.com/in/bcherchiglia" target="_blank">
          <img className="socialImage" src="https://logodix.com/logo/1280091.png" alt="linkedInButton" />
          {/* <button className="linkedinButton">linkedin</button> */}
        </Link>
        <Link to="http://www.github.com/cherch173" target="_blank">
          <img className="socialImage" src="https://i.pinimg.com/736x/30/b1/50/30b150cd489202db131009ac9540cec0.jpg" alt="gitHubText" />
          {/* <button className="githubButton">github</button> */}
        </Link>
        {/* <button onClick={handleClick} className="scrollButton" target="_blank">resume</button> */}
        {/* <Link to="/resume" target="_blank">
          <img src="" alt="" />
        </Link> */}
    </div>
  )
}

export default Nav
