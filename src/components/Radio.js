import React, { Component } from 'react'
import Icon from './Icon'

export default class Radio extends Component {
  render() {
    return (
      <div className={`radio ${this.props.color}`}>
        <input 
          type="radio" 
          id={this.props.id} 
          name={this.props.name}
          defaultValue={this.props.defaultValue}
          disabled={this.props.disabled}
          checked={this.props.checked}
          onChange={this.props.onChange}/>

        <label htmlFor={this.props.id}>
          <span>
            <Icon name="circle" size={16}/>
          </span>
          {this.props.label}
        </label>
      </div>
    )
  }
}
