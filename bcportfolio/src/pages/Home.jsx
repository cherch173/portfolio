import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3 className="headerText">Brian Cherchiglia</h3>
      <h5 className="subheaderText">software engineer - fullstack web developer </h5>

      <Link to="/portfolio">
        <button className="button">enter portfolio</button>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <button onClick={() => setCount((count) => count + 1)}>
        {count} clicks
      </button> */}

    </div>
  )
}

export default Home
