import React, { Component } from 'react'
import classNames from 'classnames'

import Icon from './Icon'

export default class Checkbox extends Component {
  render() {
    var liClasses = classNames({
      'checkbox': true,
      [this.props.color]: this.props.color,
      [this.props.className]: this.props.className
    });

    return (
      <div className={liClasses}>
        <input 
          type="checkbox" 
          name={this.props.name}
          id={this.props.id}
          disabled={this.props.disabled}
          checked={this.props.checked}
          onChange={this.props.onChange}/>

        <label htmlFor={this.props.id}>
          <span>
            <Icon name="check" size={16}/>
          </span>
          {this.props.label}
        </label>
      </div>
    )
  }
}
