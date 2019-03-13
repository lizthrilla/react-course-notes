import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return <h1>Hello {this.props.student},</h1>
  }
}

export default HelloWorld
