import React, { Component } from 'react'
import classNames from 'classnames'

export default class Avatar extends Component {

  static defaultProps = {
    size: 'md',
    initials: ''
  };

  render() {

    const color = this.props.color ? `bg-color-${this.props.color}` : '';
    const size = this.props.size ? `${this.props.size}` : '';

    var liClasses = classNames({
      'avatar': true,
      [color]: this.props.color,
      [size]: size,
    });

    const liStyles = {
      backgroundColor: this.props.customColor,
      ...this.props.style
    }

    if(this.props.children) {
      return (
        <div className={liClasses} style={liStyles}>
           {this.props.children}
         </div>
      )
    } else {
      return (
        <div className={liClasses} data-initials={this.props.initials} style={liStyles}/>
      )
    }
  }
}
