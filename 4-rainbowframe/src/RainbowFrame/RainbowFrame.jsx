import React from 'react';

class RainbowFrame extends React.Component {
    render() {
        let z = this.props.children;
        this.props.colors.forEach(color => {
            z = <div style={{ border: '5px solid ' + color, padding: '10px' }}>{z}</div>
        });
        return (
            <div>
                {z}
            </div>
        )
    }
}

export default RainbowFrame;