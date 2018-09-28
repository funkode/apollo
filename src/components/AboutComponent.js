import team from '../images/team.jpg';
import React from 'react';
export const About = () =>
  <React.Fragment>
    <h3>The glorious team behind this awesome initiative is:</h3>
    <ul>
      <li>Dominic Frempong</li>
      <li>Pradeep Reddy</li>
      <li>Shelley Tong</li>
      <li>Todd Tang</li>
    </ul>
    <span>Under the guidance of <b>Eric W. Greene</b></span>
    <img className="teamPic" src={team} alt={"team"}/>
  </React.Fragment>;
