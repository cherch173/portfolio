import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

const Skills = () => {
    return (
        <div>
            <h3>Skills</h3>
            <Link to="https://react.dev/" target="_blank">
                <img className="skillsImage" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="reactImage" />
            </Link>
            <Link to="https://nodejs.org/en" target="_blank">
                <img className="skillsImage" src="https://opengeekslab.com/wp-content/themes/opengeekslab_new/assets/dist/img/node_big.png" alt="nodeImage" />
            </Link>
            <Link to="https://www.mongodb.com/" target="_blank">
                <img className="skillsImage" src="https://pythondiaryblog.files.wordpress.com/2017/01/mongodb.png" alt="mongoImage" />
            </Link>
            <br />
            <Link to="https://expressjs.com/" target="_blank">
                <img className="skillsImage" src="https://testrigor.com/wp-content/uploads/2023/02/express-logo_square.png" alt="expressImage" />
            </Link>
            <Link to="https://www.python.org/" target="_blank">
                <img className="skillsImage" src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django" alt="djangoImage" />
            </Link>
            <Link to="https://www.python.org/" target="_blank">
                <img className="skillsImage" src="https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc" alt="pythonImage" />
            </Link>
        </div>
    )
}

export default Skills
