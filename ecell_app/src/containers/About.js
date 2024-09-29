import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import "../styles/index.css"

import makeRequest from '../utils'

import Navbar from '../components/Navbar'

const About = (props) => {
  const [investAmt, setInvestAmt] = useState(0)
  const [info, setInfo] = useState({
    img: '', team_name: '', team_content: '', link: ''
  })

  const { teamId } = useParams("teamId")

  useEffect(() => {
    makeRequest('GET', '/api/business/' + teamId, {})
      .then(res => {
        setInfo(res)
      })
  }, [])

  const handleSubmit = () => {
    makeRequest('POST', '/api/business/' + teamId, { amt: investAmt })
    .then(res => { alert('Investment successfull!') })
  }

  return (
    <div className='business-details-1'>
      <div className="left">
        <img src={info.link} alt="" />
      </div>
      <div className='right'>
        <h1>{ info.team_name } <span>Rem. Amt.: {localStorage.getItem('balance')} L</span></h1>
        <p>
          { info.team_content }
        </p>
        <div className='button-grp'>
          { props.invest === "true" ? <input type='number' placeholder="Amount to Invest" name="invest" onChange={(event) => {setInvestAmt(event.target.value)}} /> : <a href={info.link} target="_blank">Link</a> }
          { props.invest === "true" ? <button type="submit" onClick={handleSubmit}>Invest</button> : <Link to={"/business_about/"+teamId+"/invest"}>Invest</Link> }
        </div>
      </div>
    </div>
  )
}

export default About