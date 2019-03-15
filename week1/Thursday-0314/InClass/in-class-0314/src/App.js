import React, { Component } from 'react';
import Person from './components/Person'
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        age: 36,
        lastName: 'Tennant'
    };
  }

  updateLastName = () => {
    console.log('clicked')
    this.setState({
      lastName: 'Smith',
      maidenName: 'Tennant'
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hello, world!</h1>
          <Person age={this.state.age}/>
          <h3 onClick={this.updateLastName}>My last name is {this.state.maidenName} {this.state.lastName} </h3>
          <Clock />
        </div>
      </div>
    );
  }
}

export default App;
