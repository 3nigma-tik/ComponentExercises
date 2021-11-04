import React from 'react';
import './DisplayName.css' 

function DisplayName(props){
    return (
        <div className="row row-spacer">
            <div className="column-md-4" style={{padding: 0}}>
                <h1> {props.names.firstName} {props.names.lastName}</h1>
            </div>            
        </div>
    )
}

export default DisplayName