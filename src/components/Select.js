import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { List, ListItem } from './List';
import { Dropdown, DropdownItem } from './Dropdown'; 

export default class Select extends Component {

  state = {
    error: '',
    selecteds: [],
  }

  componentDidUpdate() {
    this.props.values(this.state.selecteds);
  }
  handleChange(e) {
    if (!this.props.required) return false

    if (e.target.value === '') {
      this.setState({ error: 'has-error' })
    } else {
      this.setState({ error: '' })
    }
  }
  handleChangeSelect(e, event) {
    let list = [...this.state.selecteds];
    let index = list.indexOf(e);
    if (index > -1 && !event.target.checked) {
      list.splice(index, 1);
    } else {
      list.push(e);
    }
    this.setState({ selecteds: list });
  }
  render() {
    return (
      <React.Fragment>
        {!this.props.multiple && <div className={`form-group ${this.state.error}`}>
          <label htmlFor="name">{this.props.label}</label>
          <div className="input-group">
            <div className="input-field">
              <select id={this.props.id} className="form-control" onChange={(e) => { this.props.onChange(e); this.handleChange(e) }}>
                <option value="" disabled={this.props.defaultOption.disabled}>{this.props.defaultOption.label}</option>
                {this.props.options.map(e =>
                  <option value={e.value} key={e.value}>{e.label}</option>
                )}
              </select>
            </div>
          </div>
          <div className="hint persistent">{this.props.hintText}</div>
        </div>}
        {this.props.multiple &&
          <div className="form-group multiselect">
            <label htmlFor="name">{this.props.label}</label>
            <Dropdown y="bottom" x="right">
              <div className="input-group">
                <div className="input-field">
                  <div className="form-control">
                    {this.state.selecteds.length === 0 && this.props.defaultOption.label}
                    {this.state.selecteds.map((e, i) =>
                      <span key={e.value} className="chip">{e.label}</span>
                    )}
                  </div>
                </div>
              </div>
              <DropdownItem>
                <div className="options">
                  <List>
                    {this.props.options.map((e, i) =>
                      <ListItem key={e.value}>
                        <Checkbox label={e.label} name={`opt_${i}`} id={`opt_${i}`} color="primary" onChange={event => this.handleChangeSelect(e, event)} />
                      </ListItem>
                    )}
                  </List>
                </div>
              </DropdownItem>
            </Dropdown>
          </div>
        }
      </React.Fragment>
    )
  }
}

Select.defaultProps = {
  defaultOption: {
    disabled: false,
    label: 'Select option'
  }
}