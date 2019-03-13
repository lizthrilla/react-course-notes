import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
// import FirstClass from './components/FirstClass'
import WhatsYourNameMan from './components/WhatsYourNameMan'

// const names = [
//   "Katherine",
//   "Bree",
//   "Jose",
//   "Liz"
// ];

const characters = [
  "Alexander",
  "Lafayette",
  "Laurens",
  "Hercules Mulligan",
  "Eliza",
  "Angelica",
  "and Peggy"
];
class App extends Component {
  render() {
    return (
      <div>
        {characters.map(character => {
          return <WhatsYourNameMan name={character} />
        })}
      </div>
    )
  }
}

export default App
