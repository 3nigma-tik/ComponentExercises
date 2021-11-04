import { render } from '@testing-library/react';
import React, { Component } from 'react';
import DisplayName from './DisplayName/DisplayName';
import './App.css'
import ListOfPeople from './ListOfPeople/ListOfPeople'

class App extends Component {
    constructor(props){
        super(props)
        this.state = 
            { firstName: 'Reggie',
            lastName: 'White' };
            
        this.people = [
            'Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'
        ]
        

    };

    

    render(){
        return(
          <div className="container-fluid">
              <DisplayName names={this.state} />
              <div classname="col-md-4">
              <h1>{this.person}</h1>
              </div>
              <div classname="col-md-4">
                  <h1></h1>
              </div>
          </div>
           
        )
    }

}
    
export default App;