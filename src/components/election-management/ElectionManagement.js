import React from 'react';

import {ToolHeader} from './ToolHeader';
import {ElectionForm} from './ElectionForm';

export const ElectionManagement = (props) => {
   return (
   <div>
       <ToolHeader headerText="Election Management" />
       <ElectionForm voterId={props.voterId}/>
   </div>);
}

