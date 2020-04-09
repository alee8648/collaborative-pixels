import React from 'react';
import base from './base';
import Shape from './components/Shape';

class App extends React.Component {
    // nameToAdd = React.createRef();
    // initiativeToAdd = React.createRef();
    state = {
        // initiative: [],
        count: 0,
        time: 0,
    };

    constructor() {
        super(...arguments);
        this.startTimer();
    }

    componentDidMount() {
        // this.initiativeRef = base.syncState(`test-adam/initiative`, {
        //   context: this,
        //   state: 'initiative',
        //   asArray: true // this is super important! Firebase doesn't save any arrays, only objects with indexes as keys
        // });
    }

    componentWillUnmount() {
        console.log('unmounting');
        // base.removeBinding(this.initiativeRef);
    }

    startTimer() {
        setTimeout(() => {
            this.increaseTime();
            this.startTimer();
            // this.handleTimeIncrease();
        }, 1000);
    }

    increaseTime() {
        this.setState({
            time: this.state.time + 1,
        });
        // console.log(this.state.time);
    }

    // handleTimeIncrease() {
    //   // Every {speed}, deal {damage}
    //   if (this.state.time % this.state.speed < 1) {
    //     // this.handleIncreaseCount();
    //   }
    // }

    getShapes() {
        const shapesArray = [];

        for (let i = 0; i < 200; i++) {
            shapesArray.push(
                <Shape key={i} count={i} time={this.state.time} />
            );
        }

        return (
            <div className="shapes__wrapper">
                <div className="shapes">{shapesArray}</div>
            </div>
        );
    }

    render() {
        return <div className="App">{this.getShapes()}</div>;
    }
}

export default App;
