import React from 'react'
import Logo from "../images/logo.png"
import "../styles/index.css"

const SignUp = (props) => {
    return (
        <>
            <div class="container">
                <div class="card">
                    <center>
                        <img src={Logo} />
                    </center>
                    <h2>Pitcher's Showdown<br />{props.admin === "true" ? "Admin " : ""} Login</h2>
                    <form>
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required />
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
