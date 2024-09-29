import React from 'react'
import Logo from "../images/logo.png"
import "../styles/index.css"

import makeRequest from '../utils'

const Login = (props) => {
    const handleSubmit = (ev) => {
        ev.preventDefault()
        const data = {}
        ev.currentTarget.querySelectorAll('input').forEach(inp => data[inp.name] = inp.value)
        makeRequest('POST', '/api/auth/login', data).then(res => {
            localStorage.setItem('token', res.jwtToken)
            props.setAmt(res.balance)
        })
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <center>
                        {/* <img src="../images/logo.png" alt='Logo'/> */}
                        <img src={Logo} alt="Logo" />
                    </center>
                    <h2>Pitcher's Showdown<br />{props.admin === "true" ? "Admin " : ""} Login</h2>
                    <form onSubmit={handleSubmit}>
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
