import React from 'react';
import {ElectionListItem} from './ElectionListItem';
export const ElectionSelectionComponent = (props) =>{
  const ballotsList = props.ballotsList.map(ballot=><ElectionListItem
                            setSelectedBallot= {props.setSelectedBallot} ballot={ballot}/>)
  return <React.Fragment>
    <h1>Elections</h1>
    <table>
		  <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Vote</th>
        </tr>
      </thead>
      <tbody>
    {ballotsList}
    </tbody>
    </table>
  </React.Fragment>
}
ElectionSelectionComponent.defaultProps={
  ballotsList:[]
}
