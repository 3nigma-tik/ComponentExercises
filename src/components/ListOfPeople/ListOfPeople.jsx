import React from 'react';
import './ListOfPeople.css' 

function ListOfPeople(props){
    return (
        <div className="row row-spacer">
            <div className="column-md-12" style={{padding: 0}}>
                <h1> {props.state} </h1>
            </div>            
        </div>
    )
}

export default ListOfPeople