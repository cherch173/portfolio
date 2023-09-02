import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Bio = (props) => {
  // const [commits, setCommits] = useState('')

  // const getCommits = async () => {
  //   try {
  //     const res = await axios.get(`https://ghchart.rshah.org/cherch173`)
  //     setCommits(res.data)
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // useEffect(() => {
  //   getCommits()
  // }, []);

  const getCurrentDate = () => {
    const date = new Date()
    date.getUTCDate()
    return date.toLocaleDateString()
  }

  const handleClick = () => {
    fetch('/Brian_Cherchiglia_Resume_SE2023.pdf').then(res => {
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = '/Brian_Cherchiglia_Resume_SE2023.pdf';
        alink.click()
      })
    })
  }


  return (
    <div>
      <h3 className="headerText">
        Hi! I'm
        <span className="whiteText">
          Brian.
        </span>
      </h3>
      <br />
      <img
        src="https://avatars.githubusercontent.com/u/130800271?v=4"
        className="profileImage"
        alt="profileImage"
      />
      <br />
      <br />
      <Link to="http://www.github.com/cherch173" target="_blank">
        <img className="socialImage" src="/github-logo-black.jpg" alt="gitHubText" />
      </Link>
      <Link to="http://www.linkedin.com/in/bcherchiglia" target="_blank">
        <img className="socialImage" src="https://logodix.com/logo/1280091.png" alt="linkedInButton" />
      </Link>

      <div className="card">
        <p>Welcome, my friends. Welcome to my
          <span className="devText">
            machines.
          </span>
        </p>
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
          with a passion for programming and an extensive background in the music industry as both a performing artist and a music publisher.
        </p>
        <p>
          I also helped to soundtrack titles and trailers for several major video game franchises such as <i>Grand Theft Auto, Fallout, EA Sports (FIFA, Madden), NBA 2k, Guitar Hero </i> and more. Not only do I have experience working for Fortune 500 companies, I've also been a part of several startups and indies.
        </p>
        <p>
          I've developed and deployed several
          <span className="devText">
            fullstack web applications
          </span>
          using a diverse array of tech stacks, methodologies, languages and frameworks including those showcased here, as well as countless others.
          <br />
          {/* <br />
          <Link to="https://smokeapp-4be26bed9b46.herokuapp.com/" target="_blank">
            SMOKE
          </Link>
          <br />
          [MongoDB | Express.js | REACT.js | NODE.js]
          <br />
          <br />
          <Link to="https://clearance-b56453d7410f.herokuapp.com/" target="_blank">
            CLEARANCE
          </Link>
          <br />
          [Python | Django | postgreSQL | AWS S3]
          <br /> */}

        </p>
        <Link className="gitLabel" to="http://www.github.com/cherch173" target="_blank">
          GITHUB HEATMAP! [<strong>1200+</strong> commits as of {getCurrentDate()}]
        </Link>
        <img className="funImage" src="https://ghchart.rshah.org/cherch173" alt="cherch173's Github Heat Map" />
        <p>
          In 2023, I
          <span className="devText">
            graduated
          </span>
          from General Assembly's Software Engineering 2.0 Immersive (which entailed 420 hours of real-world programming experience, work-based problems and application design). The bootcamp provided me with an incredible amount of technical knowledge and insight; allowing me to sharpen and refine my development skills.
        </p>
        <p>
          I hope you enjoy perusing my catalog as much as I enjoyed building it. Feel free to<span className="devText">contact me</span>using the link above in the<span className="devText">nav</span>regarding potential opportunities, professional inquiries or if you'd just like to talk shop.
        </p>
        <p>
          Thanks for taking the time to get to know me a little better,
        </p>
        <p>- Brian</p>
      </div>
      <br />
      <Link to="/">
        <button className="button">back</button>
      </Link>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Bio
