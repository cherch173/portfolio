import React from 'react'
import { Link } from 'react-router-dom'

const Bio = () => {
  return (
    <div>
      <h3 className="headerText">Hi, I'm Brian.</h3>
      <h5>Software Engineer ~ Fullstack Web Developer</h5>
      <img
        src="https://avatars.githubusercontent.com/u/130800271?v=4"
        className="profileImage"
        alt="profileImage"
      />
      <p>
        <a href="http://www.linkedin.com/in/bcherchiglia" targey="_blank">LinkedIn</a> | <a href="http://www.github.com/cherch173">Github</a>
      </p>
      <p>
        I'm a software engineer, curator and web developer with a passion for programming using React.js, Python / Django with extensive background in the music industry as both a performing artist an music publsher.
      </p>
      <p>
        Within my first year of web development, I'd already built and deployed several diverse web applications with a litany of different tech stacks, languages, frameworks and methodologies including (but not limited to):
        <ul>
            <Link to="https://smokeapp-4be26bed9b46.herokuapp.com/">
            SMOKE
            </Link>
            <br />
            (MongoDB / Express.js / React.js / Node.js)
            <br />
            <br />
            <Link to="https://clearance-b56453d7410f.herokuapp.com/">
            CLEARANCE
            </Link>
            <br />
            (Python / Django / postgreSQL / AWS S3)
            <br />
        </ul>
      </p>
      <Link to="https://www.github.com/cherch173" target="_blank">
        <img
          className="funImage"
          src="https://camo.githubusercontent.com/c759b6bf4b90abb76d14e5d5d875f88a4ab983745c5dbfa42d0a2c03eccd4782/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f6a6e5549496c30374e364b4670486c3344482f67697068792e6769663f6369643d656366303565343766787664363134303035626637636b6e77376d396f36636f626a77313737317578617864716d6f692665703d76315f676966735f736561726368267269643d67697068792e6769662663743d67"
          alt="bioImage"
          />
      </Link>
          <p>
            I also have a passion for game design. In my spare time (in order to keep my JavaScript skills sharp) I love to build browser-based games.
          </p>
    </div>
  )
}

export default Bio
