import React from 'react';
import {Router, Route,Switch, Link } from "react-router-dom";

export const BallotVoteItem = ({checked,questionObject,voteCheckListener}) =>{
  // const link="/"+ballot.id+"/login"
  return<tr>
    <td>{questionObject.question}</td>
    <td><input type="checkbox" checked = {checked} onChange={evt => voteCheckListener({ id:questionObject.id , checked:evt.target.checked})}/></td>

  </tr>

}
