let isHorizantal = false;
let observer = null;
let cars = [
    {
        id: 1,
        color: 'red',
        position: [2, 4, 2, 3]
    },
    {
        id: 2,
        color: 'blue',
        position: [0, 1, 1, 1]
    }
]

function emitChange() {
    observer(cars);
}

export function observe(o) {
    observer = o;
    emitChange();
}

export function moveCar(toX1, toY1, carId) {
    isHorizantal = false;
    let currentCar = cars.find(car => car.id === carId);
    if (currentCar) {
        let [a, b, c] = currentCar.position;
        if (a === c) {
            isHorizantal = true;
        }
        let lastCoordiante = 0;
        if (isHorizantal) {
            if (toY1 < b) {
                lastCoordiante = toY1 + 1;
            } else {
                lastCoordiante = toY1 - 1;
            }
        } else {
            if (toX1 < a) {
                lastCoordiante = toX1 + 1;
            } else {
                lastCoordiante = toX1 - 1;
            }
        }
        currentCar.position = [toX1, toY1, toX1, lastCoordiante];
        emitChange();
    }
}

// export function canMoveKnight(toX, toY) {
//     const [x, y] = knightPosition;
//     const dx = toX - x;
//     const dy = toY - y;

//     return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
// }