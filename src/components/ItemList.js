import React from 'react';

export const ItemList = props => {

  return <ul>
    {props.items.map(item => <li key={item}>{item}</li>)}
  </ul>;

};
