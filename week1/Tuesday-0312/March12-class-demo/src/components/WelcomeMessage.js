
    
import React, { Component } from 'react'

class WelcomeMessage extends Component {
  render() {
    console.log(this.props)
    if (this.props.username === 'Lafayette') {
      return (
        <h2 className="lafayette">
          oui oui mon ami je m'appelle   {this.props.username.toUpperCase()}
        </h2>
      )
    } if (this.props.username === 'Peggy') {
        return (
            <h2>
                AND {this.props.username.toUpperCase()}
            </h2>
        )
    } if (this.props.username === 'Hercules Mulligan') {
        return (
            <h2>
                My name is {this.props.username}, I need no introduction.  When you knock me down I get back up again!
            </h2>
        )

    }else {
      return <h3 className="hero">My name is {this.props.username}!</h3>
    }
  }
}

export default WelcomeMessage