import React, { Component } from 'react'
import classNames from 'classnames'

export default class Container extends Component {
  render() {
    var liClasses = classNames({
      'container': true,
      [this.props.size]: this.props.size,
    });

    return (
      <div className={liClasses}>
        {this.props.children}
      </div>
    )
  }
}
