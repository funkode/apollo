import React from 'react';
import {BallotVoteComponent} from './BallotVoteComponent'
export class VoteCheckListener extends React.Component{
  constructor(props){
    super(props);
    this.state={
      voteYes:[]
    }

  }

  voteCheckListener= ({id,checked})=>{
    const prevArray=(this.state.voteYes.slice());
    if (checked) {
      const newArray=prevArray.concat(id);
		  this.setState({
        voteYes:newArray
      });
		} else {
      const newArray=prevArray.filter(cId => {
        return cId !== id;
      });
      this.setState({
        voteYes: newArray,
      });
		}
  }
  onVote=()=>{
    const newArray=this.state.voteYes;
    this.props.createBallot({
      electionId: this.props.match.params.ballotId,
      userId: this.props.match.params.userId,
      votes: newArray
    });
    console.log(this.state.voteYes);
    this.setState({
      voteYes: [],
    });
  }
  render(){
    return <React.Fragment>
      <BallotVoteComponent onVote= {this.onVote} {...this.props} selectedQuestions= {this.state.voteYes} voteCheckListener={this.voteCheckListener}/>
    </React.Fragment>;
  }
}
