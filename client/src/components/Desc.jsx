import React from 'react';
import burstImage from '../../public/assets/halfvisible.png';
import "../styles/Homepage.css";
function Desc() {
  return (
    <>
      <div className="why-register">
        WHY REGISTER?
      </div>

      <div className="pitchers-description">
        Pitchers Showdown is a launchpad for your ideas!<br />
        THIS IS YOUR CHANCE TO FUEL YOUR CREATIVITY!<br />
        GET A CHANCE TO:<br />
        Validate the ideas both as pitcher and judge<br />
        Enhance your critical thinking<br />
        
        <span className="highlight">
          Not into startups?<br />
          Don't worry
        </span>
        
        This event can help you in:<br />
        Networking<br />
        Exposure of idea relevancy in market<br />
        Helpful in building your confidence for placements and project in future!
      </div>

      <div className="comic-bursts">
        <img
          src={burstImage}
          alt="Left burst"
          className="burst-left"
        />
         <div className="rules-heading">
          Rules
        </div>
        <img
          src={burstImage}
          alt="Right burst"
          className="burst-right"
        />
      </div>

      <div className="rules-section">
       
        
        <div className="rules-description">
          <ul className="rules-list">
            <li>Participants will pitch their ideas to the panel and to other teams one by one</li>
            <li>While one team pitches their idea, the other teams will act like sharks and ask questions to them</li>
            <li>The participants will then continue to invest the virtual money allotted to them in the different ideas that they like in whatever proportion they want</li>
            <li>The winners will be decided based on the algorithm we made, calculating their score depending upon the investments made and investments received with varying weightages</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Desc;
