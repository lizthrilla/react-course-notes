import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';
import Clock from './components/Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: 'React I Class - Day 2'
    }
  }

  changeClass = () => {
    console.log('testing this')
    this.setState({ course: 'React' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Person course={this.state.course} changeClass={this.changeClass}/>
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
