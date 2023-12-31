import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Bio = (props) => {

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
      <Link to="https://www.github.com/cherch173" target="_blank">
        <img
          src="https://avatars.githubusercontent.com/u/130800271?v=4"
          className="profileImage"
          alt="profileImage"
        />
      </Link>
      <br />
      <br />
      <Link to="http://www.github.com/cherch173" target="_blank">
        <img className="socialImage" src="/github-logo-black.jpg" alt="gitHubText" />
      </Link>
      <Link to="http://www.linkedin.com/in/bcherchiglia" target="_blank">
        <img className="socialImage" src="https://logodix.com/logo/1280091.png" alt="linkedInButton" />
      </Link>

      <div className="card">
        <div>
          <p className="typewriter">Welcome, my friends. Welcome to my
            <span className="devText">
              machines.
            </span>
          </p>
          <p className="typewriter2">
            I'm a
            <span className="devText">
              software engineer,
            curator
            </span>
            and
            <span className="devText">
              web developer
            </span>
            with a passion for programming and an extensive background in the music industry as both a performing artist and a music publisher.
          </p>
          <p>
            I've helped to soundtrack titles and trailers for several major video game franchises such as <i>Grand Theft Auto, Fallout, EA Sports (FIFA, Madden), NBA 2k, Guitar Hero </i> and more. Not only do I have experience working for Fortune 500 companies, I've also been a part of several startups and indies.
          </p>
          <p>
            I've developed several
            <span className="devText">
              fullstack web applications
            </span>
            into deployment using a diverse array of tech stacks, methodologies, languages and frameworks including those showcased here, as well as countless others.
            <br />
          </p>
        </div>
        <Link className="gitLabel" to="http://www.github.com/cherch173" target="_blank">
          GITHUB HEATMAP [<strong>2,000+</strong> commits as of {getCurrentDate()}]
        </Link>
        <img className="funImage" src="https://ghchart.rshah.org/cherch173" alt="cherch173's Github Heat Map" />
        <p>
          In early 2023, I
          <span className="devText">
            graduated
          </span>
          from General Assembly's Software Engineering 2.0 Immersive (which entailed 420 hours of real-world programming experience, work-based problems and application design). The bootcamp provided me with an incredible amount of technical knowledge and insight; allowing me to sharpen and refine my development skills.
          Since then, I've expanded my palate by diving head-first into Applied Machine Learning and Artifical Intelligence foundations, earning several different certifications in Python3 based AML including training data sets, building neural networks, prompting and laddering LLMs and using frameworks such as Jupyter Notebook, Jupyter Lab, Anaconda & PyTorch.
        </p>
        <p>
          I've also become certified in DevOps, Data Structures & Algorithms and advanced front-end skillsets such as CSS Animations and learning to harness the true power of useState and useEffect in the React-Router-DOM.
        </p>
        <p>
          I hope you enjoy browsing my catalog as much as I enjoyed building it. Feel free to<span className="devText">contact me</span>using the link above in the<span className="devText">nav</span>regarding potential opportunities, professional inquiries or if you'd just like to talk shop.
        </p>
        <p>
          Thanks for taking the time to get to know me a little better.
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
