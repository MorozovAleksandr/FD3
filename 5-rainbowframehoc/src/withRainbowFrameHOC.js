import React from "react";

function withRainbowFrameHOC(colors) {
    return (Component) => {
        return (props) => {
            let x = <Component {...props} />;
            colors.forEach(item => {
                x = <div style={{ border: '5px solid ' + item, padding: '5px' }}>{x}</div>
            });
            return x;
        }
    }
}

export default withRainbowFrameHOC;