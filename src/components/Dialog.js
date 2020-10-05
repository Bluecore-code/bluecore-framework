import React, { Component } from 'react'
import classNames from 'classnames'

class Dialog extends Component {
    componentDidMount() {
        window.addEventListener("click", this.windowOnClick);
    }
    windowOnClick = (event) => {
        var modal = document.querySelector(".dialog.active");
        if (event.target === modal && this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        var liClasses = classNames({
            'dialog': true,
            [this.props.className]: this.props.className,
            'scrollable': this.props.scrollable,
            'active': this.props.open
        });

        var liChildClasses = classNames({
            'dialog-content': true,
            [this.props.size]: this.props.size
        })

        return (
            <div className={liClasses}>
                <div className={liChildClasses}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class DialogHeader extends Component {
    render() {
        return (
            <div className="dialog-content-header">
                {
                    this.props.onClose && <button className="btn btn-white icon close" onClick={this.props.onClose}>&times;</button>
                }
                <h4>{this.props.title}</h4>
                {this.props.children}
            </div>
        );
    }
}

class DialogContent extends Component {
    render() {
        return (
            <div className={`dialog-content-body`}>
                { this.props.children }
            </div >
        );
    }
}

class DialogFooter extends Component {
    render() {
        return (
            <div className="dialog-content-footer" >
                { this.props.children }
            </div>
        );
    }
}
export {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogFooter
};