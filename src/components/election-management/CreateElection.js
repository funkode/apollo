import React from 'react'

import {ElectionsTable} from './ElectionsTable';

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

   addElection = () => {
       // This is for submitting a election. Pass in the name and questions here.
   }

   listElections = () => {
       return <ElectionsTable elections={this.props.elections} />
   }


   render() {
       console.log("CREATE ELECTION");
       console.log(this.props)
       if (this.props.loading) {
           return <h1>"Loading..."</h1>;
       }

       if (this.props.errors) {
        console.log(this.props.errors);
        return <h1>"An error has occurred"</h1>;
      }

           return (<form>
               <div>
                   <strong>Existing Elections (To be listed):</strong>
               </div>
               <div>
                   {this.listElections()}
               </div>

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
                   <button type="button" onClick={this.addElection}>Submit</button>
               </div>
               </form>);
   }
}
