import React from 'react';
import '.ListOfPeople.css' 

function ListOfPeople(props){
    return (
        <div className="row row-spacer">
            <div className="column-md-8" style={{padding: 0}}>
                <h1> {props.people} </h1>
            </div>            
        </div>
    )
}

export default ListOfPeople