import React from 'react';

class PopOver extends React.Component {

  render() {
    return (
      <span className={`popover ${this.props.x} ${this.props.y}`}>
        {this.props.children}
        <div className={`popover-menu ${this.props.size}`}>
          {this.props.label}
        </div>
      </span>
    );
  }
}

export default PopOver;