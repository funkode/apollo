import React from 'react';
import {Router, Route,Switch, Link } from "react-router-dom";

export const BallotVoteItem = (props) =>{
  // const link="/"+ballot.id+"/login"
  console.log(props);
  return<tr>
    <td>{props.question.question}</td>
    <td>Vote</td>
  </tr>

}
