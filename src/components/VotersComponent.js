import React from 'react';
import {Link } from "react-router-dom";

export const Voters = () =>
  <React.Fragment>
    <ul>
      <li>
        <Link to="/voters/voterlist">Voters List</Link>
      </li>
      <li>
        <Link to="/voters/register">Register</Link>
      </li>
    </ul>
</React.Fragment>;
