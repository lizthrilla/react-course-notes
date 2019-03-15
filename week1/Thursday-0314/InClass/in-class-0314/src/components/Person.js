import React, { Component } from 'react'


class Person extends Component {
  
    render() {
      return (
        <div>
          <h2>I am {this.props.age} years old.</h2>
        </div>
      );
    }
  }
    

export default Person
