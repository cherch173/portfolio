import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Resume from './Resume'

const Portfolio = () => {
    const scrollDownRef = useRef()
    const scrollallTheWayDownRef = useRef()
    const scrollUpRef = useRef()


    const scrollUp = () => {
        scrollDownRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollDown = () => {
        scrollUpRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollBottom = () => {
        scrollallTheWayDownRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleClick = () => {

        fetch('/Brian - Cherchiglia - Resume - SE2023 - GA.pdf').then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = '/Brian - Cherchiglia - Resume - SE2023 - GA.pdf';
                alink.click()
            })
        })
    }

    return (
        <div>
            <h3 className="headerText" ref={scrollDownRef}>Brian Cherchiglia</h3>
            <h6 className="subheaderText">Software Engineer - Full Stack Web Developer </h6>
            <Link to="http://www.linkedin.com/in/bcherchiglia" target="_blank">
                <img className="socialImage" src="https://logodix.com/logo/1280091.png" alt="scrollButton" />
            </Link>
            <Link to="http://www.github.com/cherch173" target="_blank">
                <img className="socialImage" src="/github-logo-black.jpg" alt="gitHubText" />
            </Link>
            <br />
            <button className="scrollButton" onClick={scrollDown}>go to games</button>
            <button className="scrollButton" onClick={scrollBottom}>page down</button>
            <br />
            <br />
            <h6>Featured Web Applications</h6>
            <div className="card">
                <Link to="https://medsmusic.com/" target="_blank">
                    <img className="medsImage" src="/IssaTeaserSquareNoText.gif" alt="medsImage" />
                    <h3>MEDS - Official Website</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack </label>
                <p>[React.js | NODE.js]</p>
                <label className="label" htmlFor="description">description </label>
                <p>The official website for Brooklyn based punk band<span className="devText">MEDS.</span>
                    <p>
                        Built entirely in React (needing only Front End Development), I chose to make the website body engage the user with an immersive psychedelic CRT video (that I produced) set to respond to the band's music. The website is incredibly<span className="devText">responsive</span>and seamlessly resizes between computers and mobile devices without sacrificing fidelity.</p>
                </p>
                <br />
                <Link to="http://www.github.com/cherch173/medswebsite" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
                <Link to="http://medsmusic.com" target="_blank">
                    <button className="button">website</button>
                </Link>
                <br />
            </div>
            <br />
            <div className="card">
                <Link to="https://smokeapp-4be26bed9b46.herokuapp.com/" target="_blank">
                    <img className="portfolioImage" src="https://i.gifer.com/XTiU.gif" alt="smokeImage" />
                    <h3>SMOKE</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack </label>
                <p>MERN [MongoDB | Express.js | React.js | NODE.js]</p>
                <label className="label" htmlFor="description">description </label>
                <p><span className="devText">SMOKE</span> is a social network I designed as a hub for intellectual property and creative endeavors. Using the expansive capabilities of React's built in react-router-dom features (such as useRef useContext and Link) I engineered a comment section unique to each card and (using nested arrays of objects) store user data and presence within several schemas, making data access between objects virtually global from just a simple "like."</p>
                <p>
                    <span className="devText">RECRUITER LOGIN</span>
                    <br />
                    <label className="devText" htmlFor="smokeLoginRecruiters">email: </label>accawebdevelopment@gmail.com
                    <br />
                    <label className="devText" htmlFor="smokePWRecruiters">password: </label>hireBrian
                </p>
                <br />
                <Link to="http://www.github.com/cherch173/smoke" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
                <Link to="https://smokeapp-4be26bed9b46.herokuapp.com/" target="_blank">
                    <button className="button">website</button>
                </Link>
                <br />
            </div>
            <br />
            <div className="card">
                <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
                    <img className="portfolioImage" src="https://s3.us-east-2.amazonaws.com/clearance-bnp/5a8c9c.webp" alt="clearanceImage" />
                    <h3>CLEARANCE</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack</label>
                <p>[Python | Django | postgreSQL | AWS S3 | Materialize | CSS]</p>
                <label className="label" htmlFor="description">description</label>
                <p>A fullstack web application that acts as a fully user-interactive database for confirmed declassified UAP / UFO cases, sightings and reports.  Utilizing several different full CRUD operations, users can read articles, view images, gifs and videos (spanning from entire documentaries to military footage and radar data) in high resolution and even access official government documentation.</p>
                <p><span className="devText">CLEARANCE</span>was built as a group endeavor with two other developers (Platin Syla & Nicholas Emmons) where I served as Git Manager, Project Manager and the primary composer for entites with one-to-many relationships.  In addition to my project leadership and backend design, I also spearheaded Frontend development combining raw CSS with Google's Materialize.</p>
                <p>
                    <span className="devText">RECRUITER LOGIN</span>
                    <br />
                    <label className="devText" htmlFor="smokeLoginRecruiters">username: </label>recruitersBC
                    <br />
                    <label className="devText" htmlFor="smokePWRecruiters">password: </label>hireBrian
                </p>
                <br />
                <Link to="http://www.github.com/cherch173/clearance" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
                <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
                    <button className="button">website</button>
                </Link>
                <br />
            </div>
            {/* <br />
            <div className="card">
                <Link to="https://slice.herokuapp.com/" target="_blank">
                    <img className="medsImage" src="https://github.com/cherch173/slice/raw/main/public/images/shaqPizza.gif" alt="sliceImage" />
                    <h3>SLICE</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack </label>
                <p>[Express.js | NODE.js | OAuth | CSS | Javascript | HTML]</p>
                <label className="label" htmlFor="description">description </label>
                <p>The official end to the argument. Long have New Yorkers argued over what the <i>best</i> pizza in the city is.  Well, in order to quell that debate I made <span className="devText">SLICE</span>: an Express.js application that acts as a power rankings site to achieve that exact goal using an aggregate scale of 5.</p>
                <br />
                <Link to="http://www.github.com/cherch173/slice" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
                <Link to="https://slice.herokuapp.com/" target="_blank">
                    <button className="button">website</button>
                </Link>
                <br />
            </div> */}
            <br />

            <h6 ref={scrollUpRef}>Featured Browser-Based Games</h6>
            <button className="scrollButton" onClick={scrollUp} ref={scrollallTheWayDownRef}>
                go to apps
            </button>
            <div className="card">
                <Link to="https://gritty.surge.sh/" target="_blank">
                    <img className="portfolioImage" src="https://media.tenor.com/FPeoC2M4Z3IAAAAC/gritty-flyers-mascot.gif" alt="sliceImage" />
                    <h3>GRITTY [Tic-Tac-Toe]</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack </label>
                <p>[Javascript | CSS | HTML]</p>
                <label className="label" htmlFor="description">description </label>
                <p>A tic-tac-toe tete-a-tete against everyone's favorite mascot, <span className="grittyText">Gritty</span>.</p>
                <br />
                <Link to="http://www.github.com/cherch173/grit_gritt_n_gritty" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
            </div>
            <br />
            <div className="card">
                <Link to="https://connect4charliemurphy.surge.sh/" target="_blank">
                    <img className="portfolioImage" src="https://64.media.tumblr.com/a85b790668f0e6f19c76d8e9cb212174/tumblr_oobgdstkPS1u2ragso3_500.gif" alt="charliemurphyImage" />
                    <h3>CONNECT FOUR, CHARLIE MURPHY</h3>
                </Link>
                <label className="label" htmlFor="techStack">tech stack </label>
                <p>[Javascript | CSS | HTML]</p>
                <label className="label" htmlFor="description">description </label>
                <p>You're Charlie Murphy.
                </p>
                <p>
                    <span className="princeText">Prince</span> just challenged you to a game of Connect Four.
                </p>
                <p>

                    ...hope you like pancakes.
                </p>

                <br />
                <Link to="https://github.com/cherch173/connectFourCharlieMurphy" target='_blank'>
                    <button className="githubButton">github</button>
                </Link>
            </div>
            <br />
            <button className="scrollButton" onClick={scrollUp} ref={scrollallTheWayDownRef}>
                page up
            </button>
        </div>
    )
}

export default Portfolio
