import React, { Component } from 'react';


class ClickMe extends Component {

    constructor(props) {
        super(props);
        this.state = {}
         
    }


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewBook(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <button type="submit"> Click me </button>
            </form>
         );
    }
}
 
export default ClickMe;