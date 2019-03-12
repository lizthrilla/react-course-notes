import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import WelcomeMessage from './components/WelcomeMessage'

const characters = [
  'Alexander',
  'Eliza',
  'Angelica',
  'Peggy',
  'Lafayette',
  'Hercules Mulligan',
  'George Washington',
  'John Laurens'
]
class App extends Component {
  render() {
    return (
      <section>
        <HelloWorld />
        {characters.map(character => {
          return <WelcomeMessage username={character} />
        })}
      </section>
    )
  }
}

export default App
