import React from 'react';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

import './VoterTable.css';

export const VoterTable  = ({
    loading, error, voters, editVoterId, selectedVoterIds, onAddSelectedVoterId, onRemoveSelectedVoterId,
    onSaveVoter, onEditVoter, onCancelVoter, onDeleteVoter, onDeleteSelectedVoters,
  }) => {
  
    const selectVoter = ({ checked, voterId }) => {
        console.log(selectedVoterIds);
      if (checked) {
        onAddSelectedVoterId(voterId);
      } else {
        onRemoveSelectedVoterId(voterId);
      }
    };

    if (loading){
        return "Your Page Is Loading";
    }

    if (error) {
        console.log(error); 
        return null;
    }

    return <React.Fragment>
            <button type="button" className="button deleteButton" onClick={() => onDeleteSelectedVoters(selectedVoterIds)}>Delete Selected</button>
            <table className="voterTable">
                <thead>
                    <tr>
                        <th>Select Voter</th>
                        <th>Voter ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>County/City</th>
                        <th>Birthdate</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {voters.map(voter => voter.id === editVoterId
                        ? <VoterEditRow key={voter.id} voter={voter} onSaveVoter={onSaveVoter}
                        onCancelVoter={onCancelVoter} onSelectVoter={selectVoter} voterSelected={selectedVoterIds.includes(voter.id)}/>
                        : <VoterViewRow key={voter.id} voter={voter} onEditVoter={onEditVoter} 
                        onDeleteVoter={onDeleteVoter} onSelectVoter={selectVoter} voterSelected={selectedVoterIds.includes(voter.id)}/>
                        )}
                </tbody>
            </table>
        </React.Fragment>
}