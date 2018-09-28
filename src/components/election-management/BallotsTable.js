import React from 'react';

const getQuestions = (ballot) => {
    return (
        <ul>
            {ballot.questions.map(question => <li>{question}</li>)}
        </ul>
    );
}

const toBallotRow = (ballot) => {
    return (
        <tr><td>{ballot.id}</td><td>{ballot.name}</td><td><button type="button">View</button></td></tr>
    );
};

export const BallotsTable = (props) => {
    return <table>
            <tbody>
            <tr><th>ID</th><th>Name</th><th>View</th></tr>
                {props.ballots.map(ballot => toBallotRow(ballot))}
            </tbody>
        </table>
};