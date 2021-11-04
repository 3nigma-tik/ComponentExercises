import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import './App.css'
import ListOfPeople from './ListOfPeople/ListOfPeople'
import SuperHeroes from './SuperHeroes/SuperHeroes'
import ClickMe from './ClickMe/ClickMe';

class App extends Component {
    constructor(props){
        super(props)
        this.state = { 
            firstName: 'Reggie',
            lastName: 'White',
            names:  [
                ' Mike ', ' Nevin ', ' Aaron ', ' Tory ', ' Kelly '
            ],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
        };

    }
    

    

    render(){
        return(
          <div className="container-fluid">
              <DisplayName names={this.state} />
              <div classname="col-md-4">
              <ol>{this.state.names}</ol>
              </div>
              <ListOfPeople />
              <div classname="col-md-4">
                  <h1> Here's a List</h1>
              </div>
              <div className="col-md-4">
                  <SuperHeroes />
              </div>
              <div classname="col-md-4">
                  <ClickMe />
              </div>
          </div>
           
        )
    }

}
    
export default App;