import React from 'react';
import './App.css';

export default class Sqaure extends React.Component {
    render() {
        let className;
        if(this.props.children) {
            className = "filled-square";
        } else {
            className = 'square';
        }
        return (
            <div style={this.props.style} className={className}>
                {this.props.children}
            </div>
        )
    }
}