import React from 'react';

import {ElectionsTable} from './ElectionsTable';

export class ListElections extends React.Component {
    constructor(props) {
        super(props);
    }

    listElections = (elections) => {
        return <ElectionsTable elections={elections} />
    }

    render() {
        console.log(this.props)
        if (this.props.loading) {
            return <h1>"Loading..."</h1>;
        }
    
        if (this.props.errors) {
         console.log(this.props.errors);
         return <h1>"An error has occurred"</h1>;
       }
        return <div>
                    <div>
                        <strong>Existing Elections:</strong>
                    </div>
                    <div>   
                        {this.listElections(this.props.elections)}
                    </div></div>
    }
}