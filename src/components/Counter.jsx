import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    number: this.props.defaultNumber
  }
  
  add = () => {
    this.setState({ number: this.state.number + 1 })
  }
  
  decrease = () => {
    this.setState({ number: this.state.number - 1 })
  }

  render() {
    return (
      <div>
        <div>Number: { this.state.number }</div>
        <button onClick={ this.add }>Add</button>
        <button onClick={ this.decrease }>Decrease</button>
      </div>
    )
  }
}