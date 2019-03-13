import React, { Component } from 'react'

export default class WhatsYourNameMan extends Component {
  render() {
    console.log(this.props)
    {if (this.props.name === 'Alexander'){
        return <h1>My name is {this.props.name} Hamilton!</h1>
    } else if (this.props.name === 'Lafayette') {
        return <h1>Oui Oui Mon Ami je'mepelle {this.props.name}</h1>
    } else if (this.props.name === 'Laurens') {
        return <h1>{this.props.name}: Two pints of sam addams and I'm working on three</h1>
    } else if (this.props.name === 'Hercules Mulligan') {
        return <h1>{this.props.name}, you knock me down I get the eff back up again</h1>
    } else {
        return <h1>{this.props.name}</h1>
    }}
  }
}
