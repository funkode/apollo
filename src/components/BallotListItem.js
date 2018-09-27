import React from 'react';
import {Router, Route,Switch, Link } from "react-router-dom";

export const BallotListItem = ({ballot,setSelectedBallot}) =>{
  const link="/"+ballot.id+"/login"
  return <tr>
    <td>{ballot.id}</td>
    <td>{ballot.name}</td>
    <Link to={link}><button onClick={()=> setSelectedBallot(ballot)}> Vote </button></Link>
  </tr>

}
