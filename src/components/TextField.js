import React, { Component } from 'react'

export default class TextField extends Component {
  state = {
    error: ''
  }
  handleBlur(e){
    if(this.validate(e)) {
      this.setState({error: true})
      if(this.props.error) {
        this.props.error({[this.props.name]: { error: true}})
      }
    } else {
      this.setState({error: false})
      if(this.props.error) {
        this.props.error({[this.props.name]: { error: true}})
      }
    } 
  }
  validate(value) {
    if(value === ''){
      return true;
    }

    if(this.props.minLength && this.props.maxLength){
      return (!(value.length >= this.props.minLength && value.length <= this.props.maxLength))
    }

    if(this.props.min && this.props.max){
      return (!(value >= this.props.min && value <= this.props.max))
    }

    if(this.props.type === 'email') {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !regex.test(String(value).toLowerCase());
    }
  }

  render() {
    return (
      <div className={`form-group ${this.state.error ? 'has-error': ''}`}>
        <label htmlFor="name">{this.props.label}</label>
        <div className="input-group">
          <div className="input-field">
            <input className="form-control" 
              id={this.props.id}
              name={this.props.name}
              type={this.props.type ? this.props.type : 'text'} 
              disabled={this.props.disabled}
              readOnly={this.props.readOnly}
              placeholder={this.props.label} 
              value={this.props.defaultValue}
              onChange={this.props.onChange}
              onClick={this.props.onClick}
              onBlur={this.props.required ? (e) => this.handleBlur(e.target.value) : null}
             />
          </div>
        </div>
        <div className="hint persistent">{this.props.hintText}</div>
        <div className="hint">{this.props.errorText}</div>
      </div>
    )
  }
}
TextField.defaultProps = {
  onChange: null,
  defaultValue: '',
  readOnly: false,
  disabled: false,
  required: false
}