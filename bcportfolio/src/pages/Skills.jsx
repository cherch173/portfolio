import React from 'react'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

const Skills = () => {
    return (
        <div>
            <h3 className="">Frameworks x Languages</h3>
            <Link to="https://react.dev/" target="_blank">
                <img className="skillsImage" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="reactImage" />
            </Link>
            <Link to="https://www.djangoproject.com/" target="_blank">
                <img className="skillsImage" src="https://images.ctfassets.net/23aumh6u8s0i/6ubUHRD1qfolOVHxiBfjZ7/4e704f48dc5b0104d0c380fec1fe9b9e/django" alt="djangoImage" />
            </Link>
            <Link to="https://www.python.org/" target="_blank">
                <img className="skillsImage" src="https://qph.cf2.quoracdn.net/main-qimg-28cadbd02699c25a88e5c78d73c7babc" alt="pythonImage" />
            </Link>
            <br />
            <Link to="https://expressjs.com/" target="_blank">
                <img className="funImage" src="https://testrigor.com/wp-content/uploads/2023/02/express-logo_square.png" alt="expressImage" />
            </Link>
            <Link to="https://nodejs.org/en" target="_blank">
                <img className="skillsImage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEX///9AQTc+hj04OS1emlhzqmM0NSmMjYhxqGF2rmNtpV94sWJbmFVknV95tGFinFwwMSR3tV7y8vFnn1t1t1p0uFdyulTU4tNrv0dxpGxwu1Dz9vKqxqd8rHhuvU2rq6nn5+ZNj0g9hTwkJRShoZ0ygTG1tbLr6+pVVk7U1NIpKhzn7+be3t1JSkHKysjCwsCHiINWm0yXu5S1zrPN3syMtIlkZV50dG5vb2lLjUeqzKVYoUqio58ZGwDA1b7f6t6SvIaWwYix0qbK4sOYzYZivDqEx2ukzJpJjz5WokNQoz5lqU84jC8pfyeOtI1Cizp/sHSksAzLAAAH0ElEQVR4nO2ba1ubSBSAuYmaHQqbdIsIqUJiNERrrmoam3Ttuqt13e7//zU7wy0wGUhsiBH2vB/SxxSBlzNnLmeQ4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgxFzvbvsONkzVleXWtm9io1RlntfO2tu+jQ1CDHnevTne9o1sDN+QF93d6rZvZUMEhthRO9r2vWyGyJDnG+XscWKGYjnHDTAsPmBYfMCw+IBh8QHD4gOGxQcMX+kuNrj8fhOGzUZj1WvPvn6drXzaJvlcxbB9dbbJxfGliO9BFle5hPn70/6ePTJXOW1LlL2TLjc8vXbFDZbj2meaf/kVLnH39Mv+zk4F2daqp9Uu2sfaEsMm9iO43U3kSvXaja7Pu9enWcd+e//+HTHcUVVUG2ae9nR+Wm0eQqah14KC/9Zu15Jh0dREPoaoNVMPnb07fP+rZ7hXUdVar95Z+bQZhudXbvwA7eJTLl4hl7xM34MsXjIPNf+4P/wtNNyrqcSxn5KOLXHhtCmG1W6DfhTu1XFuftTjm1/ifPHYu/uDww9zw4qEDWs1NGCd9kxjnZZleCQzQi1qOQ0pjMcXXqJBZ/y3g/uDjwlDL4hYsabTp71upPpRhp8uUh7Fat36MpiPb/4Y48Xpzp/3BweUYRDEGp2OaQm4aHh8w2xBPhqrHb2Iatrjiy5xEYXxL+K3YEiCGDh+jk7LyOs0w103+1G43fUMb5cIYsWwU53+OFgwrBBDKVCsPExDwawGmjRcfqi73h5HM/MBJu7FGj8xYxgFsXISDv+7q5/1aEmw157CLhjK9BXFMIaWjT4yDcMYolwMRfp38zWU+VaLSqG44YRp6CliRyfVULuiB440Q7Gxe+2mHJqDYTBXSnaDc8MHP4h0HuLgeVG00wxl/nJh8E8x9GaL7eTjWNcwdgEtnIye3sQuETPs2T1mDBHChpIjMA1F1z9BNdFpMg2jGX8r3lTl3Azl2GQ3FtrI8PNDr2cfsg1xEMcC01CcTxqOb2JfMwxlr9MceCfpRoeKjfXWUjFDLTZ/OZ7nQsKw12MbIgkJbEMtdrFTxuopZtjAPw4NVVLwauU8PHTt9xpeYjghhodMQxuN0wzjZ11qqNsKxh6GhjmsMJYbyknDHqunQbY9Ho/zMJSIoRQY5vJCw0sMHyeTSc9+ZMaQGI7zNVyc97+K4URw0g2d9Q0RMUTYsMFcu72C4YPjTFINhSWGK/Q0U9wrk8Vmtctef2/W8DtWdATB+cDMQ8Feaniebah5QeunFQw2ZxgOk3ffHx9/EMMHZgyFsc0y5C+iYLTmX6aM+Om1odcyJCHEik9MQ4cZw6gY0k6sRNmztnzW9OsYCh7OA9NQEGz2vBQvYqun1Hw6beadfzX4RYZ+CEkQmYYOO4bER6ZrGumrpyWl2k0YhqPu3fdAEKuwehr2nCaFjBVwVql2TcPY19UvDMO/Q0PBmTBb6c8YthhlFG+5lRe3oaEsJ2aAl1EFLjI0xydCBKunORmHv/1pafGlEV6tyiyq5piOgSFeWlMzpKiKKs/nhtZz6Oj0FgxPnmNV4axiMC3QYhbb3OucNmdu01+9PvYr4XJ89jt6DjsbOg9P/kn+dkY9UeapMYFZUAxXznkYpi5RvFp0wpCbKb6j04vH0P5hLO7ONNmFUNFdXLOzi8LuVR6GTVmUM5YoR4v/PRW8purszw1txNxho8dAPrW5MAv7Mp/L7lPrS/Z789Xul4V+zUtHx44Me6xtGY82fd8ZK1pqdyG/MWNpPjMOMOu4qToVf2cmdWvNI3Hfmc2Fq+7Od4jEzewCv4CZhB33cU/T+zf5tsK0TwW02g3TcfldR+mY19pwLaYnJ7Wdyt408aVuSKqkJL8LdydXumsvHfPe/v1p+s+xzSZCZ4QUVVUVyaD2Ei8vNG3VacoRT48lW8RMJqCFFAVZZJWuIPotlKMS/I3MVI3EAtVyMatLscbZqePmqmS/hVIszD5JwHgHMzRwOtZXfinsrTOQcKukR8UBSceci0pbYogbJGK8NOQFVgpGx8HAKqqsSVLOYKccSU5VIU3Vmll6UbseAzfQ1GmpH1+T6wx1vc9NUw97y8yQkv0CpqWqA66j65bFpT+It4wuSfS7UDhiw6EeaptIxc2zPzOHg2ImYsxwpNbxp2lJSMKgIDd9Q9MaWAUdOmKGdcXAKjjxiKA3VJBvfcMCQxuOVGU07HQ6uiUp3sK/dIaqUg9+HErKiCufoYk8LQ8FqVz5DDlFUa2Z32maHfJv6QwtMlNDxqg/DbrO0hniER53o+Rlg8CsfIacObRGBh4TyeqJK6Whj6lbeETUy2doGUY0N5uq0rSEhiqKpqnDUhrqSAm3aExDQbPyGXJ1st7vW1aflE7LOKfBE1Okkqow/kDe7KZ8htzMqqsISYblf198w7lAYrSIGEoFN8SLCTUoi7IMTZyOKONv94pARwmK+R0pWjhFeOX94pe+iYY06uMPqtQ0VRhbNIWENEUsoyYbqW5IJarrz/qqYiQ6FG8rkd4qLQFRiyzl/hoeGOpB9bs8CZgk3MHwthJLk4BJdLJpaEilTMCQAZmVljABY5j9ejl2RQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/Nf8BfV7+ZG56/CkAAAAASUVORK5CYII=" alt="nodeImage" />
            </Link>
            <Link to="https://www.mongodb.com/" target="_blank">
                <img className="skillsImage" src="https://repvue.imgix.net/a9yxc48y3ay5dm2udzwizc2bdyph" alt="mongoImage" />
            </Link>
            <br />
            <Link to="https://html.com/html5/" target="_blank">
                <img className="skillsImage" src="https://www.w3.org/html/logo/downloads/HTML5_1Color_White.png" alt="htmlImage" />
            </Link>
            <Link to="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                <img className="skillsImage" src="https://juststickers.in/wp-content/uploads/2014/05/CSS3-Mark-Shape-Cut.png" alt="cssImage" />
            </Link>
            <Link to="https://www.javascript.com/" target="_blank">
                <img className="skillsImage" src="https://i.pinimg.com/1200x/b8/70/c8/b870c8a9047350903de12945ec4d5e18.jpg" alt="jsImage" />
            </Link>
            <br />
            <Link to="https://www.javascript.com/" target="_blank">
                <img className="skillsImage" src="https://i.pinimg.com/1200x/b8/70/c8/b870c8a9047350903de12945ec4d5e18.jpg" alt="jsImage" />
            </Link>
            <Link to="https://www.javascript.com/" target="_blank">
                <img className="skillsImage" src="https://icons-for-free.com/iconfiles/png/512/postgresql+plain+wordmark-1324760555518154961.png" alt="postgreSQLImage" />
            </Link>
            <Link to="https://mongoosejs.com/docs/" target="_blank">
                <img className="skillsImage" src="https://ih1.redbubble.net/image.438912061.6243/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="mongooseImage" />
            </Link>
            <br />


        </div>
    )
}

export default Skills
