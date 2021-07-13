import React from "react";

class Br2jsx extends React.Component {
    render() {
        let createArray = this.props.text.replace(/<br? ?\/?>/g, ' <br> ').split(' ');
        let replaceArray = createArray.map((item, index) => item === '<br>' ? <br key={index} /> : item);
        return (
            <div>
                {replaceArray}
            </div>
        )
    }
}

export default Br2jsx;