import React, { Component } from 'react'
import classNames from 'classnames'

export default class Dropdown extends Component {

    state = {
        active: false,
    };

    toggleClass = () => {
        this.setState({ active: !this.state.active });
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            this.setState({ active: false });
            return
        }
    }

    render() {

        var liClasses = classNames({
            'dropdown': true,
            [this.props.y]: this.props.color,
            [this.props.x]: this.props.x,
            [this.props.icon]: this.props.icon,
            [this.props.className]: this.props.className,
            'active': this.state.active
        });

        return (
            <span ref={node => this.node = node} className={liClasses}>
                <span className="trigger"
                    onClick={() => this.toggleClass()}>
                    {this.props.children}
                </span>
                <div className="dropdown-content"
                >
                    {/* Subheader */}
                    {this.props.title && <div className="subheader">{this.props.title}</div>}
                    {/* Dropdown items */}
                    {
                        this.props.items &&
                        this.props.items.map(
                            (item, index) => {
                                return (
                                    <div key={index} onClick={this.props.onClick} className={`dropdown-content-item ${item.color}`}>
                                        <span className="dropdown-item-icon">
                                            <i className={`feather ${item.icon}`}></i>
                                        </span>
                                        {item.name}
                                    </div>
                                );
                            }
                        )
                    }
                </div>
            </span>
        )
    }
}
