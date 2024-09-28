import React from 'react'
import Logo from "../images/logo.png"
import "../styles/index.css"

const Login = (props) => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <center>
                        <img src={Logo} />
                    </center>
                    <h2>Pitcher's Showdown<br />{props.admin === "true" ? "Admin " : ""} Login</h2>
                    <form>
                        <label forhtml="username">Username</label>
                        <input type="text" id="username" name="username" required />
                        <label forhtml="password">Password</label>
                        <input type="password" id="password" name="password" required />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
