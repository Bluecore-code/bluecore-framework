import React, { Component } from 'react'

export default class Select extends Component {

  state = {
    error: ''
  }

  handleChange(e) {
    if(!this.props.required) return false

    if(e.target.value === '') {
      this.setState({error: 'has-error'})
    } else {
      this.setState({error: ''})
    }
  }
  render() {
    return (
      <div className={`form-group ${this.state.error}`}>
        <label htmlFor="name">{this.props.label}</label>
        <div className="input-group">
          <div className="input-field">
            <select id={this.props.id} className="form-control" onChange={(e) => {this.props.onChange(e); this.handleChange(e)}}>
              <option value="" disabled={this.props.defaultOption.disabled}>{this.props.defaultOption.label}</option>
              {this.props.options.map(e => 
                <option value={e.value} key={e.value}>{e.label}</option>
              )}
            </select>
          </div>
        </div>
        <div className="hint persistent">{this.props.hintText}</div>
      </div>
    )
  }
}

Select.defaultProps = {
  defaultOption: {
    disabled: false,
    label: 'Select option'
  }
}