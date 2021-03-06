import React from 'react';
import { Link } from "react-router-dom";

export const ElectionListItem = ({ballot,setSelectedBallot}) =>{
  const link="/campaign/"+ballot.id+"/login";
  return <tr>
    <td>{ballot.id}</td>
    <td>{ballot.name}</td>
    <Link to={link}><button className="button tableButton" onClick={()=> setSelectedBallot(ballot)}> Vote </button></Link>
  </tr>

}
