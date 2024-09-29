import React, { useEffect, useState } from "react";
import Logo from "../images/logo.png";
import makeRequest from "../utils";

import Navbar from "../components/Navbar";

const Listofbusiness = (props) => {
  const [teams, setTeams] = useState([])
  
  useEffect(() => {
    makeRequest('GET', '/api/business', {})
      .then(res => setTeams(res.teams))
  }, [])

  return (
    <>
      <Navbar />
      <div className="top-bar">
        <img className="logo" src={Logo} />
      </div>
      <div className="content">
        <div className="Header">
          <div className="head">List of Businesses</div>
          <div className="Amount">Amount: {localStorage.getItem('balance')}</div>
        </div>

        <div className="buttons">
          {teams.map((team, idx) => 
            <button key={idx} className="Teams" style={{ border: "1px solid black" }}>
              <a href={"/business_about/" + team.id}>{team.team_name}</a>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Listofbusiness;
