import React from 'react';

export class ListElections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedElectionId: -1
        };
    }

        
    toElectionRow = (election) => {
        return (
            <tr><td>{election.id}</td><td>{election.name}</td><td><button type="button" onClick={() => this.onViewClick(election)}>View</button></td></tr>
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

    viewElectionInfo = () => {
        const selectedElection = this.props.elections.filter(election => election.id === this.state.selectedElectionId)[0];
        return <div>
            <div>Election Name: {selectedElection.name}</div>
            <div>Questions:</div>
            <div><ul>
                    {selectedElection.questions.map(question => <li>{question.question}</li>)}
                </ul>
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
                <table>
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