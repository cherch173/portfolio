import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const scrollDownRef = useRef()
    const scrollUpRef = useRef()


    const scrollUp = () => {
        scrollDownRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollDown = () => {
        scrollUpRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <div>
            <h3 className="headerText">Brian Cherchiglia</h3>
            <h5 className="subheaderText" ref={scrollDownRef}>Featured Web Applications</h5>
            <Link to="/src/assets/Brian Cherchiglia Resume SE2023.pdf" target="_blank">
                <button className="scrollButton">download resume</button>
            </Link>
            <button className="scrollButton" onClick={scrollDown}>scroll down to games</button>
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
                <p>A fullstack web application that acts as a fully user-interactive database for confirmed declassified UAP / UFO cases, sightings and reports.  Utilizing several different full CRUD operations, users can read articles, view images, gifs and videos (spanning from entire documentaries to military footage and radar data) in high resolution and even access official government documentation.</p>
                <p><span className="devText">CLEARANCE</span>was built as a group endeavor with two other developers (Platin Syla & Nicholas Emmons) where I served as Git Manager, Project Manager and the primary composer for entites with one-to-many relationships.  In addition to my project leadership and backend design, I also spearheaded Frontend development combining raw CSS with Google's UI library Materialize.</p>
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
            <div className="card">
                <Link to="https://gritty.surge.sh/" target="_blank">
                    <img className="portfolioImage" src="https://media.tenor.com/FPeoC2M4Z3IAAAAC/gritty-flyers-mascot.gif" alt="sliceImage" />
                    <h3>GRITTY (Tic-Tac-Toe)</h3>
                </Link>
                <label className="grittyLabel" htmlFor="techStack">tech stack: </label>
                <p>[Javascript | CSS | HTML]</p>
                <label className="grittyLabel" htmlFor="description">description: </label>
                <p>A tic-tac-toe tete-a-tete against everyone's favorite mascot, <span className="grittyText">Gritty</span>.</p>
                <br />
                <Link to="http://www.github.com/cherch173/grit_gritt_n_gritty" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
            </div>
            <br />
            <div className="card">
                <Link to="https://connect4charliemurphy.surge.sh/" target="_blank">
                    <img className="portfolioImage" src="" alt="charliemurphyImage" />
                    <h3>CONNECT FOUR, CHARLIE MURPHY</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack: </label>
                <p>[Javascript | CSS | HTML]</p>
                <label className="label" htmlFor="description">description: </label>
                <p>You're Charlie Murphy.
                </p>
                <p>
                    <span className="princeText">Prince</span> just challenged you to a game of Connect Four.
                </p>
                <p>

                    ...hope you like pancakes.
                </p>

                <br />
                <Link to="http://www.github.com/cherch173/grit_gritt_n_gritty" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
            </div>
            <br />
            <button ref={scrollUpRef} className="scrollButton" onClick={scrollUp}>
                scroll up to apps
            </button>
        </div>
    )
}

export default Portfolio
