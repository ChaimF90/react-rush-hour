import React from 'react';
import './App.css';


class Car extends React.Component {
    render() {
        return (
            <div style={this.props.style} className="square-with-car">
            </div>
        )
    }
}

export default Car;

