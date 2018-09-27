import React from 'react';
import {BallotListItem} from './BallotListItem';
export const BallotSelectionComponent = (props) =>{
  const ballotsList = props.ballotsList.map(ballot=><BallotListItem
                            setSelectedBallot= {props.setSelectedBallot} ballot={ballot}/>)
  return <React.Fragment>
    <h1>Ballots</h1>
    <table>
		  <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Vote</th>
        </tr>
      </thead>

    {ballotsList}
    </table>
  </React.Fragment>
}
BallotSelectionComponent.defaultProps={
  ballotsList:[]
}
