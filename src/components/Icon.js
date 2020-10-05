import React, { Component } from 'react'
import feather from 'feather-icons'

export default class Icon extends Component {
  componentDidMount() {
    feather.replace()
  }
  render() {
    return (
      <i data-feather={this.props.name} color={this.props.color} className="icon" width={this.props.size} height={this.props.size}></i>
    )
  }
}




