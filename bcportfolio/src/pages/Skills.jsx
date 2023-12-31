import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

const Skills = () => {
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

    return (
        <div>
            <h3 className="headerText" ref={scrollDownRef}>Skills</h3>
            <h3 className="subheaderText">Frameworks x Languages</h3>
            <Link to="https://react.dev/" target="_blank">
                <img title="React.js" className="skillsImage" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="reactImage" />
            </Link>
            <Link to="https://www.djangoproject.com/" target="_blank">
                <img title="Django" className="skillsImage" src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django" alt="djangoImage" />
            </Link>
            <Link to="https://www.python.org/" target="_blank">
                <img title="Python" className="whiteSquareSkillsImage" src="https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc" alt="pythonImage" />
            </Link>
            <br />
            <Link to="https://nodejs.org/en" target="_blank">
                <img title="NODE.js" className="whiteSquareSkillsImage" src="data:image/png;base64,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" alt="nodeImage" />
            </Link>
            <Link to="https://www.mongodb.com/" target="_blank">
                <img title="mongoDB" className="whiteSquareSkillsImage" src="https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph" alt="mongoImage" />
            </Link>
            <Link to="https://expressjs.com/" target="_blank">
                <img title="Express.js" className="whiteSquareSkillsImage" src="https://testrigor.com/wp-content/uploads/2023/02/express-logo_square.png" alt="expressImage" />
            </Link>
            <br />
            <Link to="https://html.com/html5/" target="_blank">
                <img title="HTML5" className="noSquareSkillsImage" src="https://www.w3.org/html/logo/downloads/HTML5_1Color_White.png" alt="htmlImage" />
            </Link>
            <Link to="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                <img title="CSS 3" className="noSquareSkillsImage" src="https://juststickers.in/wp-content/uploads/2014/05/CSS3-Mark-Shape-Cut.png" alt="cssImage" />
            </Link>
            <Link to="https://www.javascript.com/" target="_blank">
                <img title="JavaScript" className="skillsImage" src="https://i.pinimg.com/1200x/b8/70/c8/b870c8a9047350903de12945ec4d5e18.jpg" alt="jsImage" />
            </Link>
            <br />
            <Link to="https://aws.amazon.com/" target="_blank">
                <img title="AWS" className="skillsImage" src="https://pbs.twimg.com/profile_images/1641476962362302464/K8lb6OtN_400x400.jpg" alt="awsImage" />
            </Link>
            <Link to="https://www.postgresql.org/" target="_blank">
                <img title="postgreSQL" className="noSquareSkillsImage" src="https://icons-for-free.com/iconfiles/png/512/postgresql+plain+wordmark-1324760555518154961.png" alt="postgreSQLImage" />
            </Link>
            <Link to="https://mongoosejs.com/docs/" target="_blank">
                <img title="Mongoose" className="whiteSquareSkillsImage" src="https://ih1.redbubble.net/image.438912061.6243/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="mongooseImage" />
            </Link>
            <br />
            <Link to="https://www.heroku.com/" target="_blank">
                <img title="Heroku" className="skillsImage" src="https://cdn.worldvectorlogo.com/logos/heroku-4.svg" alt="herokuImage" />
            </Link>
            <Link to="https://aws.amazon.com/s3/" target="_blank">
                <img title="S3" className="noSquareSkillsImage" src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-s3-2968702-2464706.png" alt="s3Image" />
            </Link>
            <Link to="https://materializecss.com/media-css.html" target="_blank">
                <img title="Materialize" className="whiteSquareSkillsImage" src="data:image/png;base64,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" alt="materializeImage" />
            </Link>
            <br />
            <Link to="https://jupyter.org/" target="_blank">
                <img title="JupyterLab" className="whiteSquareSkillsImage" src="https://miro.medium.com/v2/resize:fit:1200/1*a-FWJyldIv4ywznWhGGdNg.jpeg" alt="jupyterImage" />
            </Link>
            <Link to="https://jupyter.org/" target="_blank">
                <img title="JupyterNotebook" className="noSquareSkillsImage" src="https://ncar-hackathons.github.io/jupyterlab-tutorial/images/logo/logo.png" alt="jupyterNotebookImage" />
            </Link>
            <Link to="https://www.anaconda.com/" target="_blank">
                <img title="Anaconda" className="whiteSquareSkillsImage" src="https://theqalead.b-cdn.net/wp-content/cache/theqalead.com/static/static.crozdesk.com/web-app-library-providers-logos-000-010-679-pub-anaconda-1669213315-logo.png" alt="anacondaImage" />
            </Link>
            <br />
            <Link to="https://reactnative.dev/" target="_blank">
                <img title="reactNative" className="whiteSquareSkillsImage" src="https://testrigor.com/wp-content/uploads/2023/08/react-native-logo-square.png" alt="reactNativeImage" />
            </Link>
            <Link to="https://ionic.io" target="_blank">
                <img title="Ionic" className="noSquareSkillsImage" src="https://cdck-file-uploads-global.s3.dualstack.us-west-2.amazonaws.com/ionicframework/original/3X/a/4/a488f17e4616738ff04531ef23fa4572a4659d64.png" alt="ionicImage" />
            </Link>
            <Link to="http://www.docker.com" target="_blank">
                <img title="docker" className="whiteSquareSkillsImage" src="https://blogs.swarthmore.edu/its/wp-content/uploads/2019/06/docker_logo.png" alt="dockerImage" />
            </Link>
            <br />
            <br />
            <div className="card">
                <h3 className="subheaderText">Certifications</h3>
                <Link target="_blank" className="certLink" to="/public/Certificate-of-Completion-b.cherchiglia@gmail.com-1689941659.pdf">
                    Software Engineering <span className="skillsText">(General Assembly)</span>
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/e5fef297c9f3eba718274fb5430aba602ba8be0063aa54f2f92cbf383d21894b">
                    Artificial Intelligence: Foundations
                    <br />
                    <span className="skillsText">
                        (National Assosciation of State Boards of Accountacy)
                    </span>
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/ce686414a898692395a1406f5eca6f81ecad15e1c8ca477cdc03ca0194081f14">
                    Applied Machine Learning: Foundations <span className="skillsText">(LinkedIn)</span>
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/a59cffda3382bd404ac0faf3e0fe995d4d5308047c9eb64d3de11e6908e0d5ee">
                    Applied Machine Learning Algorithms <span className="skillsText">(LinkedIn)</span>
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/1bef36e2b904144055c913d1132e9f53b6d5cbbf229bca4b2d3ecc44d3d6b54f">
                    Machine Learning with Python <span className="skillsText">(LinkedIn)</span>
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/ff7aa7b4882b6eeffac388044a663a92ed17a35e90cbad0550d3adaa41d64959">
                    Python3 Object Oriented Programming
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/f4b39a84bcde08e02e07bad8a9713f7fab96cb493400a2c0d257e2d63b4312f3">
                    Full Stack Web Development in REACT.js
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/384e671d01b2fc0700af3f50d16a93cd404c1658d97c4763b15d8f8cc6bab9e5">
                    CSS: Animation
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/bc58f0e8461e00ab13b840ad593f359c25c46ae28b6f4fd16d3bc0adbcb0abd6">
                    Designing RESTful APIs
                </Link>
                <br />
                <Link target="_blank" className="certLink" to="https://www.linkedin.com/learning/certificates/7ac3b82b1e48865075286abb7f283a36829f9291dd4f98e746f0a76ea6a13a97">
                    DevOps Foundations
                    <br />
                    <span className="skillsText">
                        (National Assosciation of State Boards of Accountacy)
                    </span>
                </Link>
                <br />
            </div>
            <br />
            <div className="card">
                <h3 className="subheaderText">Soft Skills</h3>
                <li>Git Management</li>
                <li>Innovation</li>
                <li>Perserverence</li>
                <li>Organization</li>
                <li>Creativity</li>
                <li>Time Management</li>
                <li>Growth Mindset</li>
                <li>Leadership</li>
                <li>Project Management</li>
                <li>Public Speaking</li>
                <li>Vision</li>
                <li>Curation</li>
                <li>Compassion</li>
                <li>Activism</li>
                <li>Mental Health Advocacy</li>
                <li>Remote Work</li>
                <li>Markdown</li>
            </div>
            <br />
            <button className="scrollButton" onClick={scrollUp} ref={scrollallTheWayDownRef}>
                scroll up
            </button>
            <br />
            <Link to="/">
                <button className="button" ref={scrollUpRef}>back</button>
            </Link>
        </div >
    )
}

export default Skills
