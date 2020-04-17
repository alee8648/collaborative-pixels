import React, { Component } from 'react';
import colors from '../data/colors.js';

class Shape extends Component {
    constructor() {
        super(...arguments);
    }

    getClass() {
        return `shape shape--${this.props.shape}`;
    }

    getStyles() {
        return {
            backgroundColor: `${this.props.color}`,
            borderColor: `${this.props.color}`,
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
