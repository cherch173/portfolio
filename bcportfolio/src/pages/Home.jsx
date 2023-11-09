import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3 className="headerText">Brian Cherchiglia</h3>
      <div className="container">
        <h5 className="subheaderText">software engineer - fullstack web developer </h5>
      </div>
      <br />
      <Link to="/portfolio">
        <img className="funImage" src="https://camo.githubusercontent.com/c759b6bf4b90abb76d14e5d5d875f88a4ab983745c5dbfa42d0a2c03eccd4782/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f6a6e5549496c30374e364b4670486c3344482f67697068792e6769663f6369643d656366303565343766787664363134303035626637636b6e77376d396f36636f626a77313737317578617864716d6f692665703d76315f676966735f736561726368267269643d67697068792e6769662663743d67" alt="" />
      </Link>
      <br />
      <br />
      <br />
      <Link to="/portfolio">
        <button className="button">enter portfolio</button>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home
