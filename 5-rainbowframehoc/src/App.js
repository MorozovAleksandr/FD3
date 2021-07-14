import React from "react";
import DoubleButton from "./DoubleButton";
import withRainbowFrameHOC from "./withRainbowFrameHOC";


class App extends React.Component {

    render() {
        let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
        let FramedDoubleButton = withRainbowFrameHOC(colors)(DoubleButton);
        return (
            <div>
                <DoubleButton caption1='кнопка1' caption2='кнопка2' cbPressed={num => console.log(num)} >
                    Просто компонента
                </DoubleButton>
                <FramedDoubleButton caption1="кнопка1" caption2="кнопка2" cbPressed={num => console.log(num)}>
                    ХОК
                </FramedDoubleButton>
            </div>
        );
    }
}

export default App;
