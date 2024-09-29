import React from "react";


const Home= () => {
  return (
    <div className="container">
      <div className="logos">
        <img style={{ width: '100px', height: '9vh' }} src="./logo.png" alt="Logo" />
        <img className="logo-text" style={{ width: '331px', height: '10vh' }} src="./ECELL LOGO TEXT.png" alt="Ecell Logo Text" />
      </div>
      <div className="content">
        <h1>
          Unleash your vision and conquer the world of business. <br /> Pitch, invest, and thrive at the <br /> ultimate
        </h1>
        <img className="gif" src="./standard.gif" alt="Pitch Showdown" /> <br /> <br />
        <a href="#" className="btn">LOGIN</a>
        <p>READY TO WIN BIG?</p>
      </div>
    </div>
  );
}

export default Home;
