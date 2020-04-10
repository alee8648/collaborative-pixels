import React, { Component } from 'react';

class Shape extends Component {
    constructor() {
        super(...arguments);
    }

    getClass() {
        return `shape shape--${this.props.shape}`;
    }

    getStyles() {
        let color = `hsl(${this.props.value}, 80%, 50%)`;
        return {
            backgroundColor: color,
            borderColor: color,
            // backgroundColor : `rgba(155,155,${this.state.countAtCreation * 4})`
        };
    }

    render() {
        // console.log('---- render running - Shape', this.props);

        return (
            <div className="shape__wrapper">
                <button
                    className={this.getClass()}
                    style={this.getStyles()}
                    onMouseEnter={() =>
                        this.props.onColourChange(this.props.count)
                    }
                    onMouseDown={() =>
                        this.props.onColourChange(this.props.count, true)
                    }
                ></button>
            </div>
        );
    }
}

export default Shape;
