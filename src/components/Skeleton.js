import React, { Component } from 'react'

export default class Skeleton extends Component {
  render() {
    return (
      <div className={`skeleton ${this.props.variant}`} 
        style={{width: `${this.props.width}px`, height: `${this.props.height}px`}}/>
    )
  }
}
