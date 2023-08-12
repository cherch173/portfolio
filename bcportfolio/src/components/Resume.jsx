import React from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <div>
            <h3>Resume</h3>
            <div className="card">
                <img className="resumeImage" src="public/Brian_Cherchiglia_Resume_SE2023.jpg" alt="resumeImage" />
                <img className="resumeImage" src="public/Brian_Cherchiglia_Resume_SE2023pg2.jpg" alt="resumepg2Image" />
            </div>
            <br />
            <br />
            <Link to="/">
                <button className="button">back</button>
            </Link>
        </div>
    )
}

export default Resume
