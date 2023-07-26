import React from 'react'
import { useState, useRef, useEffect } from 'react'


const Home = () => {
  const [count, setCount] = useState(0)
    
  return (
    <div>
      <h3 className="headerText">Brian Cherchiglia</h3>
      <h5 className="subheaderText">software engineer - fullstack web developer </h5>
      <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            {count} clicks
          </button>
        </div>
    </div>
  )
}

export default Home
