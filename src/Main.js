import React from 'react';
import Board from './Board';
import Sqaure from './Sqaure';
import Car from './Car';
import { moveCar } from './GameMechanics';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            matrix: [
                [0, 1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10, 11],
                [12, 13, 14, 15, 16, 17],
                [18, 19, 20, 21, 22, 23],
                [24, 25, 26, 27, 28, 29],
                [30, 31, 32, 33, 34, 35]
            ],
            carId: 0
        }
    }
    renderSquare(i, j) {
        let carFound = this.props.cars.find(car => {
            const [x1, y1, x2, y2] = car.position;
            if ((x1 === i && y1 === j) || (x2 === i && y2 === j)) {
                return car
            } else {
                return undefined;
            }
        })
        let renderThis;
        if (carFound) {
            const styles = {
                backgroundColor: carFound.color,
                borderColor: carFound.color
            }
            renderThis =
                <div onClick={() => this.setState({carId: carFound.id})}>
                    <Sqaure style={styles} >
                        <Car style={styles} />
                    </Sqaure >
                </div>
        } else {
            renderThis =
                <Sqaure>
                </Sqaure >
        }
        return (
            <div onClick={() => moveCar(i, j, this.state.carId)} key={this.state.matrix[i][j]}>
                {renderThis}
            </div>
        )
    }
    render() {
        const squares = [];
        for (let i = 0; i < this.state.matrix.length; i++) {
            for (let j = 0; j < this.state.matrix[i].length; j++) {
                squares.push(this.renderSquare(i, j))
            }
        }
        return (
            <div>
                <Board>
                    {squares}
                </Board>
            </div>
        )
    }
}

export default Main;