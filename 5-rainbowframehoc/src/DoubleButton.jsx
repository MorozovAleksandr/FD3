import React from "react";

class DoubleButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <input type='button' onClick={() => this.props.cbPressed(1)} value={this.props.caption1}></input>
                {' ' + this.props.children + ' '}
                <input type='button' onClick={() => this.props.cbPressed(2)} value={this.props.caption2}></input>
            </React.Fragment>
        )
    }
}

export default DoubleButton;