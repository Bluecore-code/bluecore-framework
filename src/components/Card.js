import React, { Component } from 'react'

class Card extends Component {
    render(){
        return (
            <div className={`card ${this.props.className}`} style={{width: `${this.props.width}px`}}>
                {this.props.children}
            </div>
        )
    }
}

class CardHeader extends Component {
    render(){
        return (
            <div className={`card-header ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}

class CardContent extends Component {
    render(){
        return (
            <div className="card-body">
            {this.props.children}
        </div>
        )
    }
}

class CardFooter extends Component {
    render(){
        return (
            <div className="card-footer">
                {this.props.children}
            </div>
        )
    }
}

export {
    Card,
    CardHeader,
    CardContent,
    CardFooter
}