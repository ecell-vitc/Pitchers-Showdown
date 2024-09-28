import React from "react"
// import { ShareNetwork } from "phosphor-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/index.css"

const Leaderboard = () => {
    return (
        <>
            <Navbar />
            <table>
                <thead>
                    <th>#</th>
                    <th>Team Name</th>
                    <th>Team Score</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Team 1</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Team 1</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Team 1</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Team 1</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Team 1</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </>
    )
}

export default Leaderboard
