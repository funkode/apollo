import React from 'react'

export class CreateElection extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           name: '',
           questions: [],
           question: '',
       };
   }

   change = evt => {
       this.setState({
         [ evt.target.name ]: evt.target.type === 'number'
           ? Number(evt.target.value)
           : evt.target.value
       });
     };

   addQuestion = () => {
       this.setState({
           question: '',
           questions: this.state.questions.concat(this.state.question)
       });
   }

   listQuestion = (question) => {
       return <li>{question}</li>;
   }

   addBallot = () => {
       // This is for submitting a ballot. Pass in the name and questions here.
   }

   render() {
           return (<form>
               <div>
                   <strong>Existing Ballots (To be listed):</strong>
               </div>
               <div>
                   <h2>Create a ballot:</h2>
               </div>
               <div>
                   <label htmlFor="question-input">Ballot Name:</label>
                   <input type="text" id="name-input" name="name" value={this.state.name} onChange={this.change} />
               </div>
               <div>
               </div>
               <div>
                   <strong>Existing questions for this ballot:</strong>
                   <ul>
                       {this.state.questions.map(question => this.listQuestion(question))}
                   </ul>
               </div>
               <div>
                   <label htmlFor="question-input">Add ballot question:</label>
                   <input type="text" id="question-input" name="question" value={this.state.question} onChange={this.change} /><button type="button" onClick={this.addQuestion}>Add question</button>
               </div>
               <div>
                   <button type="button" onClick={this.addBallot}>Submit</button>
               </div>
               </form>);
   }
}

