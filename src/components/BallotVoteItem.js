import React from 'react';

export const BallotVoteItem = ({checked,questionObject,voteCheckListener}) =>{
  // const link="/"+ballot.id+"/login"
  return<tr>
    <td>{questionObject.question}</td>
    <td><input type="checkbox" checked = {checked} onChange={evt => voteCheckListener({ id:questionObject.id , checked:evt.target.checked})}/></td>

  </tr>

}
