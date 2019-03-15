import React, { Component } from 'react'

class Person extends Component {
    constructor(props) {
      super(props);
      this.state = {
          age: 33
      };
    }

    updateAge = () => {
        console.log('update the age now!')
        this.setState({ age: 34 })
    }

    render() {
      return (
        <div>
          <h1 onClick={this.props.changeClass}>Hello, {this.props.course}!</h1>
          <h2 onClick={this.updateAge}>I am {this.state.age} years old.</h2>
        </div>
      );
    }
  }

export default Person;