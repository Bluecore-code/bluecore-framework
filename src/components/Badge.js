import React, { Component } from 'react'
import classNames from 'classnames'

export default class Badge extends Component {
  render() {

    const color = this.props.color ? `badge-${this.props.color}` : '';
    const size = this.props.size ? `${this.props.size}` : '';

    var liClasses = classNames({
      'badge': true,
      [color]: this.props.color,
      [size]: size,
      [this.props.className]: this.props.className
    });

    return (
      <div className={liClasses} 
          id={this.props.id}>
           {this.props.label}
       </div>
    )
  }
}