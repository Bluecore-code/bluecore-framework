import React from 'react';
import classNames from 'classnames';

class Switch extends React.Component {

  render() {

    const color = this.props.color ? this.props.color : '';

    var liClasses = classNames({
      'switch': true,
      [color]: this.props.color
    });

    return (
      <div className={liClasses}>
        <input 
          type="checkbox" 
          id={this.props.id} 
          name={this.props.name} 
          checked={this.props.checked} 
          disabled={this.props.disabled}
          onChange={this.props.onChange} />
        <label htmlFor={this.props.id}></label>
      </div>
    );
  }
}

export default Switch;