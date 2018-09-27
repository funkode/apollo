import React from 'react';

export const VoterViewRow = ({voter, onDeleteVoter, onEditVoter, voterSelected, onSelectVoter}) =>
    <tr>
        <td><input type="checkbox" checked={voterSelected}
            onChange={evt => onSelectVoter({ checked: evt.target.checked, voterId: voter.id })} /></td>
        <td>{voter.id}</td>
        <td>{voter.firstName}</td>
        <td>{voter.lastName}</td>
        <td>{voter.address}</td>
        <td>{voter.city}</td>
        <td>{voter.birthdate}</td>
        <td>{voter.email}</td>
        <td>{voter.phone}</td>
        <td>
            <button type="button" onClick={() => onEditVoter(voter.id)}>Edit</button>
            <button type="button" onClick={() => onDeleteVoter(voter.id)}>Delete</button>
        </td>
    </tr>