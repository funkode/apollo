import React from 'react';
import team from '../images/team.jpg';
import eric  from '../images/Eric.png';
export const About = () =>
  <React.Fragment>
    <h3>The glorious team behind this awesome initiative is:</h3>
    <div className="aboutContainer">
      <div className="leftPanel">
        <ul>
          <li>Dominic Frempong</li>
          <li>Pradeep Reddy</li>
          <li>Shelley Tong</li>
          <li>Todd Tang</li>
        </ul>
        <img className="teamPic" src={team} alt={"team"}/>
      </div>
      <div className="rightPanel">
        <span class="guideIntro">Under the guidance of <a href="https://git.t4d.io/ericwgreene" target="_blank"><b>Eric W. Greene</b></a></span>
        <img className="guidePic" src={eric} alt={"Eric W. Greene"}/>
      </div>
    </div>
  </React.Fragment>;
