import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <h1>404: Error</h1>
            <h3>Page Not Found</h3>
            <br />
            <Link to="/">
                <img
                    className="profileImage"
                    src="https://camo.githubusercontent.com/c759b6bf4b90abb76d14e5d5d875f88a4ab983745c5dbfa42d0a2c03eccd4782/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f6a6e5549496c30374e364b4670486c3344482f67697068792e6769663f6369643d656366303565343766787664363134303035626637636b6e77376d396f36636f626a77313737317578617864716d6f692665703d76315f676966735f736561726368267269643d67697068792e6769662663743d67"
                    alt="404image"
                />
            </Link>
            <br />
            <br />
            <br />
            <Link to="/">
                <button className="button" >back</button>
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
            <br />
            <br />
        </div>
    )
}

export default ErrorPage
