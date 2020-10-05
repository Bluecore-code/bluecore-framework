import React, { Component } from 'react'

class List extends Component {
    render() {
        return (
            <ul className={`list-group`}>
                { this.props.children }
            </ul>
        )
    }
}

class ListItem extends Component {
    render() {
        return (
            <li className={`list-item`}>
                { this.props.children }
            </li>
        )
    }
}

export { 
    List,
    ListItem
};