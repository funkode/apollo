import React from 'react'

import {ElectionsTable} from './ElectionsTable';

export class CreateElection extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           name: '',
           questions: [],
           question: '',
           currentQuestionId: 0
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
           questions: this.state.questions.concat({
               question: this.state.question,
                id: this.state.currentQuestionId,
           }),
           currentQuestionId: this.state.currentQuestionId + 1,

       });
   }

   listQuestion = (question) => {
       return <li>{question.question}</li>;
   }

   addElection = () => {
       // This is for submitting a election. Pass in the name and questions here.
   }

   render() {
       if (this.props.loading) {
           return <h1>"Loading..."</h1>;
       }

       if (this.props.errors) {
        console.log(this.props.errors);
        return <h1>"An error has occurred"</h1>;
      }

           return (<form>
               <div>
                   <h2>Create a election:</h2>
               </div>
               <div>
                   <label htmlFor="question-input">Election Name:</label>
                   <input type="text" id="name-input" name="name" value={this.state.name} onChange={this.change} />
               </div>
               <div>
               </div>
               <div>
                   <strong>Existing questions for this election:</strong>
                   <ul>
                       {this.state.questions.map(question => this.listQuestion(question))}
                   </ul>
               </div>
               <div>
                   <label htmlFor="question-input">Add election question:</label>
                   <input type="text" id="question-input" name="question" value={this.state.question} onChange={this.change} /><button type="button" onClick={this.addQuestion}>Add question</button>
               </div>
               <div>
                   <button type="button" onClick={() => this.props.onAppendElection(
                       {
                        questions: this.state.questions,
                        name: this.state.name,
                        })
                   }>Submit</button>
               </div>
               </form>);
   }
}

