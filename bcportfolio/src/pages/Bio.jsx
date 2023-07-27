import React from 'react'
import { Link } from 'react-router-dom'

const Bio = () => {
  return (
    <div>
      <h3 className="headerText">Hi, I'm Brian.</h3>
      <p>
        <Link to="http://www.linkedin.com/in/bcherchiglia" target="_blank">
          <button className="linkedinButton">linkedin</button>
        </Link>
        <Link to="http://www.github.com/cherch173" target="_blank">
          <button className="githubButton">github</button>
        </Link>
        <Link to="public/Brian Cherchiglia Resume SE2023.pdf" target="_blank">
          <button className="resumeButton">resume</button>
        </Link>
      </p>
      <img
        src="https://avatars.githubusercontent.com/u/130800271?v=4"
        className="profileImage"
        alt="profileImage"
      />
      <div className="card">
        <p>
          I'm a
          <span className="devText">
            software engineer,
          </span>
          curator
          and
          <span className="devText">
            web developer
          </span>
          with a passion for programming and an extensive background in the music industry as both a performing artist an music publsher.
        </p>
        <p>
          Within my first year of web development, I'd already built and deployed several
          <span className="devText">
            fullstack web applications
          </span>
          using a diverse array of tech stacks, methodologies, approaches, languages and frameworks including (but not limited to):
          <br />
          <br />
          <Link to="https://smokeapp-4be26bed9b46.herokuapp.com/">
            SMOKE
          </Link>
          <br />
          (MongoDB / Express.js / React.js / NODE.js)
          <br />
          <br />
          <Link to="https://clearance-b56453d7410f.herokuapp.com/">
            CLEARANCE
          </Link>
          <br />
          (Python / Django / postgreSQL / AWS S3)
          <br />

        </p>

        <p>
          In 2023, I
          <span className="devText">
            graduated
          </span>
          from General Assembly's Software Engineering 2.0 Immersive (which entailed 420 hours of real-world programming experience) and have quickly found refuge in the endless creative possibilities of web development.
        </p>
        <br />
      </div>
      <Link to="/portfolio">
        <button className="button">enter portfolio</button>
      </Link>
      <br />
      <br />
    </div>
  )
}

export default Bio
