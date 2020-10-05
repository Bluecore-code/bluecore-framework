import React, { Component } from 'react'
import classNames from 'classnames'

export default class Button extends Component {
  render() {

    const color = this.props.color ? `btn-${this.props.color}` : '';
    const size = this.props.size ? `${this.props.size}` : '';
    const variant = this.props.variant ? `${this.props.variant}` : '';

    var liClasses = classNames({
      'btn': true,
      [color]: this.props.color,
      [size]: size,
      [variant]: variant,
      'loading': this.props.loading
    });

    if (!this.props.href) {
      return (
        <button onClick={this.props.onClick} className={liClasses} disabled={this.props.disabled}>{this.props.children}</button>
      )
    } else {
      return (
        <a href={this.props.href} className={liClasses} disabled={this.props.disabled}>{this.props.children}</a>
      )
    }
  }
}
