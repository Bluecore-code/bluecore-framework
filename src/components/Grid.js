import React, { Component } from 'react'
import classNames from 'classnames'

class Flex extends Component {

    static defaultProps = {
        className: '',
        wrap: '',
        gap: 0
    };

    render() {
        const styles = {
            flexWrap: this.props.wrap ? 'wrap' : '',
            gap: `${this.props.gap}px`,
            justifyContent: this.props.center ? 'center' : ''
        }

        var liClasses = classNames({
            'd-flex': true,
            [this.props.className]: this.props.className,
        });

        return (
            <div className={liClasses} style={styles}>
                {this.props.children}
            </div>
        );
    }
}

class Row extends Component {

    static defaultProps = {
        className: '',
        direction: '',
        justify: '',
        alignItems: ''
    };

    render() {

        const alignItems = this.props.alignItems ? 'align-' + this.props.alignItems : ''

        var liClasses = classNames({
            'row': true,
            [this.props.direction]: this.props.direction,
            [this.props.justify]: this.props.justify,
            [alignItems]: this.props.alignItems
        });

        return (
            <div className={liClasses} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

class Column extends Component {
    render() {
        const xs = this.props.xs ? `col-xs-${this.props.xs}` : ''
        const sm = this.props.sm ? `col-sm-${this.props.sm}` : ''
        const md = this.props.md ? `col-md-${this.props.md}` : ''
        const lg = this.props.lg ? `col-lg-${this.props.lg}` : ''
        const xl = this.props.xl ? `col-xl-${this.props.xl}` : ''

        var liClasses = classNames({
            'col': true,
            [xs]: this.props.xs,
            [sm]: this.props.sm,
            [md]: this.props.md,
            [lg]: this.props.lg,
            [xl]: this.props.xl,
            [this.props.className]: this.props.className
        });

        return (
            <div className={liClasses} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export {
    Flex,
    Row,
    Column
};