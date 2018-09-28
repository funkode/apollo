import React from 'react';

const getQuestions = (election) => {
    return (
        <ul>
            {election.questions.map(question => <li>{question}</li>)}
        </ul>
    );
}

const toElectionRow = (election) => {
    return (
        <tr><td>{election.id}</td><td>{election.name}</td><td><button type="button">View</button></td></tr>
    );
};

export const ElectionsTable = (props) => {
    return <table>
            <tbody>
            <tr><th>ID</th><th>Name</th><th>View</th></tr>
                {props.elections.map(election => toElectionRow(election))}
            </tbody>
        </table>
};