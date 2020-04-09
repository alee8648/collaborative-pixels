import React, { Component } from 'react';

class Shape extends Component {
    state = {
        countAtCreation: 0,
        currentCount: 0,
    };

    constructor() {
        super(...arguments);
        this.state.countAtCreation = this.props.count;
        this.state.currentCount = this.props.count;
    }

    getClass() {
        return `shape shape--${this.props.shape}`;
    }

    getStyles() {
        return {
            backgroundColor: `hsl(${
                (this.state.currentCount + (this.props.time - 99)) * (360 / 19)
            }, 100%, 60%)`,
            // backgroundColor : `rgba(155,155,${this.state.countAtCreation * 4})`
        };
    }

    handleMouseEnter = () => {
        this.setState({
            currentCount: this.state.currentCount + 1,
        });
    };

    render() {
        // console.log('---- render running - Shape', this.props);

        return (
            <div className="shape__wrapper">
                <button
                    className={this.getClass()}
                    style={this.getStyles()}
                    onMouseEnter={this.handleMouseEnter}
                >
                    {this.state.currentCount}
                </button>
            </div>
        );
    }
}

export default Shape;
