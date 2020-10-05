import React, { Component } from 'react'
import classNames from 'classnames'

export default class Divider extends Component {
  render() {
    const divider = this.props.vertical ? 'divider-v' : 'divider hr';
    const align = this.props.textAlign ? this.props.textAlign : '';

    var liClasses = classNames({
      [divider]: true,
      [align]: this.props.textAlign
    });

    return (
      <div className={liClasses}>
        {this.props.children}
      </div>
    )
  }
}
