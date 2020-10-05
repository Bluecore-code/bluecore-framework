import React, { Component } from 'react'
import Icon from './Icon'

class SnackbarGroup extends Component {
  render() {
    return (
      <div className="snackbar-wrapper">
        {this.props.items && this.props.items.map((e,i) => <Snackbar item={e} key={i} />)}
        {this.props.children}
      </div>
    )
  }
}

class Snackbar extends Component {
  handleClose(event) {
    console.log(event.target.parentElement)
    event.target.parentElement.parentElement.remove()
  }
  render() {
    return (
      <div className={`snackbar ${this.props.item.type}`}>
        <div className="snackbar-content">
          {this.props.item.icon &&  <Icon name={`${this.props.item.icon}`} size={16}/>}
          {this.props.item.text}
        </div>
        {this.props.item.close && 
          <button onClick={(e) => this.handleClose(e)} className="btn xs icon">
            <Icon name="x" size={16}/>
          </button>
        }
      </div>
    )
  }
}

Snackbar.defaultProps = {
  item: {
    text: ''
  }
}

export {
  SnackbarGroup,
  Snackbar
}