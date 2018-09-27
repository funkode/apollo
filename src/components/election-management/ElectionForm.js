import React from 'react';

import PropTypes from 'prop-types';

export class ElectionForm extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           name: '',
           prompt: '',
           selection: '',
           selections: [],
           voterId: props.voterId,
       };
   }

   change = evt => {
       this.setState({
         [ evt.target.name ]: evt.target.type === 'number'
           ? Number(evt.target.value)
           : evt.target.value
       });
     };

     onClick = () => {
        
     }

   render() {
       return <form>
               <div>
                   <label htmlFor="election-name-input">Election Name:</label>
                   <input type="text" id="election-name-input" name="name" value={this.state.name} onChange={this.change} />
               </div>
               <div>
                   <label htmlFor="election-prompt-input">Election Prompt:</label>
                   <input type="text" id="election-prompt-input" name="prompt" value={this.state.prompt} onChange={this.change} />
               </div>
               <div>
                   <label htmlFor="election-add-choice-input">Add Choice:</label>
                   <input type="text" id="election-add-choice-input" name="choice" value={this.state.choice} onChange={this.change} />
               </div>
               <div>
                   <button type="button" onClick={this.onClick}>Submit</button>
               </div>

           </form>
   }
}

