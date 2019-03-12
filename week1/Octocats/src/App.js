import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Cats from './octocats'

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <img src={Cats.catImage} />
        <h1>{Cats.catName}</h1>
      </div>
    )
  }
}

export default App
