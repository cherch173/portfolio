import React from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <div>
            <h3>Resume</h3>
            <div className="card">
                <iframe src="public/Brian - Cherchiglia - Resume - SE2023 - GA.pdf" frameborder="0"></iframe>
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
