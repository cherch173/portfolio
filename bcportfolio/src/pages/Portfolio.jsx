import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div>
            <h3 className="headerText">Brian Cherchiglia</h3>
            <Link to="/src/assets/Brian Cherchiglia Resume SE2023.pdf" target="_blank">
                <button className="resumeButton">download resume</button>
            </Link>
            <br />
            <h5 className="subheaderText">Featured Web Applcations</h5>
            <div className="card">
                <Link to="https://smokeapp-4be26bed9b46.herokuapp.com/" target="_blank">
                    <img className="portfolioImage" src="https://i.gifer.com/XTiU.gif" alt="smokeImage" />
                    <h3>SMOKE</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack: </label>
                <p>MERN [MongoDB | Express.js | React.js | NODE.js]</p>
                <label className="label" htmlFor="description">description: </label>
                <p><span className="devText">SMOKE</span> is a social network I designed as a hub for intellectual property and creative endeavors. Using the expansive capabilities of React's built in react-router-dom features (such as useRef useContext and Link) I engineered a comment section unique to each card and (using nested arrays of objects) store user data and presence within several schemas, making data access between objects virtually global from just a simple "like."</p>
                <Link to="http://www.github.com/cherch173/smoke" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
            </div>
            <br />
            <div className="card">
                <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
                    <img className="portfolioImage" src="https://s3.us-east-2.amazonaws.com/clearance-bnp/5a8c9c.webp" alt="clearanceImage" />
                    <h3>CLEARANCE</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack: </label>
                <p>[Python | Django | postgreSQL | AWS S3 | Materialize | CSS]</p>
                <label className="label" htmlFor="description">description: </label>
                <p>A fullstack web application that acts as a fully user-interactive database for confirmed declassified UAP / UFO cases, sightings and reports.  Utilizing several different full CRUD operations, users can read articles, view images, gifs and videos (spanning from entire documentaries to military footage and radar data) in high resolution and access official documentation.</p>
                <p><span className="devText">CLEARANCE</span>was built as a group project where I served as Git Manager, project Manager and primary composer for one-to-many relationships.  In addition to my project leadership and backend design, I also spearheaded Frontend development combining CSS with Materialize.</p>
                <br />
                <Link to="http://www.github.com/cherch173/clearance" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
            </div>
            <br />
            <div className="card">
                <Link to="https://slice.herokuapp.com/" target="_blank">
                    <img className="portfolioImage" src="https://github.com/cherch173/slice/raw/main/public/images/shaqPizza.gif" alt="sliceImage" />
                    <h3>SLICE</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack: </label>
                <p>[Express.js | NODE.js | OAuth | CSS | Javascript | HTML]</p>
                <label className="label" htmlFor="description">description: </label>
                <p>The official end to the argument.  Long have New Yorkers argued over what the <i>best</i> pizza in the city is.  Well, in order to quell that debate I constructed <span className="devText">SLICE</span>, an Express.js application that acts as a power rankings site to achieve that exact goal using an aggregate scale of 5.</p>
                <br />
                <Link to="http://www.github.com/cherch173/slice" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
            </div>
            <br />
            <h5 className="subheaderText">Featured Browser-Based Games</h5>
        </div>
    )
}

export default Portfolio
