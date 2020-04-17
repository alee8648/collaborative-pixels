import React from 'react';
import base from './base';
import Shape from './components/Shape';
import colors from './data/colors.js';

class App extends React.Component {
    state = {
        matrix: [],
        count: 0,
        time: 0,
        maxShapes: 1200,
        mouseDown: false,
    };

    constructor() {
        super(...arguments);
    }

    componentDidMount() {
        this.initiativeRef = base.syncState(`pixels/matrix`, {
            context: this,
            state: 'matrix',
            asArray: true, // this is super important! Firebase doesn't save any arrays, only objects with indexes as keys
            defaultValue: this.state.matrix,
        });

        if (this.state.matrix.length < this.state.maxShapes) {
            let newMatrix = [];
            for (let i = 0; i < this.state.maxShapes; i++) {
                newMatrix.push(0);
            }
            // Uncomment this and run to 'reset' and overwrite and resync the matrix saved on firebase
            // this.setState({
            //     matrix: newMatrix,
            // });
        }
    }

    componentWillUnmount() {
        console.log('unmounting');
        base.removeBinding(this.initiativeRef);
    }

    static getNextColor(index) {
        let newIndex = index + 1;
        if (newIndex >= colors.length) {
            newIndex = 0;
        }
        return newIndex;
    }

    getShapes() {
        const shapesArray = this.state.matrix.map((value, index) => {
            return (
                <Shape
                    key={index}
                    count={index}
                    color={colors[value]}
                    onColourChange={this.handleColourChange}
                />
            );
        });

        return (
            <div className="shapes__wrapper">
                <div className="shapes">{shapesArray}</div>
            </div>
        );
    }

    handleColourChange = (index, force) => {
        if (this.state.mouseDown || force) {
            console.log('changing colour for', index);
            let matrix = [...this.state.matrix];
            matrix[index] = App.getNextColor(matrix[index]);
            console.log(matrix[index]);
            this.setState({
                matrix: matrix,
            });
        }
    };

    handleMouseDown = () => {
        this.setState({
            mouseDown: true,
        });
    };

    handleMouseUp = () => {
        this.setState({
            mouseDown: false,
        });
    };

    render() {
        return (
            <div
                className="App"
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleMouseUp}
            >
                <div className="container"> {this.getShapes()}</div>
            </div>
        );
    }
}

export default App;
