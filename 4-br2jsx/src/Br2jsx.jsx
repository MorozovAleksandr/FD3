import React from "react";

class Br2jsx extends React.Component {
    render() {
        let createArray = this.props.text.replace(/<br? ?\/?>/g, ' <br> ').split(' ');
        let replaceArray = createArray.map(item => item === '<br>' ? <br /> : item)
        return (
            <div>
                {replaceArray}
            </div>
        )
    }
}

export default Br2jsx;