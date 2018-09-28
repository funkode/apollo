import React from 'react';

import {BallotsQuery} from '../../queries/ballots/BallotQuery';

export class ListElections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedElectionId: -1
        };
    }

        
    toElectionRow = (election) => {
        return (
            <tr><td>{election.id}</td><td>{election.name}</td><td><button className="button tableButton" type="button" onClick={() => this.onViewClick(election)}>View</button></td></tr>
        );
    };

    onViewClick = (election) => {
        this.setState({
            selectedElectionId: election.id
        });
    }

    onCancel = () => {
        this.setState({
            selectedElectionId: -1
        });
    }

    getBallots = () => {
        return <BallotsQuery />;
    }

    getNumberOfYes = (questionId, ballotElections) => {
        return ballotElections.map(ballot => ballot.votes).filter(votes => votes.includes(questionId)).length;
    }

    toQuestionRow = (question, totalBallotCount, ballotElections) => {
        const numberOfYes = this.getNumberOfYes(question.id, ballotElections);
        return <tr>
            <td>{question.question}</td><td>{numberOfYes}</td><td>{totalBallotCount - numberOfYes}</td>
        </tr>;

    }

    viewElectionInfo = () => {
        const selectedElection = this.props.elections.filter(election => election.id === this.state.selectedElectionId)[0];
        const ballotElections = this.props.ballots.filter(ballot => ballot.electionId === this.state.selectedElectionId);
        const totalBallotCount = ballotElections.length;
        console.log(this.getNumberOfYes("0", ballotElections))
        console.log("Total ballot count: ", totalBallotCount);
        console.log("Elections: ", this.props.elections);
        console.log("Ballots:", ballotElections);
        return <div>
            <div>Election Name: {selectedElection.name}</div>
            <div>Questions:</div>
            <div>Total Number of ballots: {totalBallotCount}</div>
            <div><table>
                <tbody>
                    <tr><th>Question</th><th>Yes</th><th>No</th></tr>
                    {selectedElection.questions.map(question => this.toQuestionRow(question, totalBallotCount, ballotElections))}
                </tbody>
                </table>
            </div>
            <div>
                <button type="button" onClick={this.onCancel}>Cancel</button>
            </div>
        </div>
    }

    render() {
        if (this.props.loading) {
            return <h1>"Loading..."</h1>;
        }
    
        if (this.props.errors) {
         console.log(this.props.errors);
         return <h1>"An error has occurred"</h1>;
       }
        if (this.state.selectedElectionId === -1) {
            return <div>
            <div>
                <strong>Elections:</strong>
            </div>
            <div>   
                <table className="componentTable">
                    <tbody>
                        <tr><th>ID</th><th>Name</th><th>View</th></tr>
                            {this.props.elections.map(election => this.toElectionRow(election))}
                    </tbody>
                </table>
            </div></div>;
        }
        else {
            return this.viewElectionInfo(this.state.selectedElectionId);
        }
    }
}

ListElections.defaultProps = {
    elections: [],
    ballots: [],
};