import RainbowFrame from "./RainbowFrame/RainbowFrame";

function App() {
  let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
  return (
    <RainbowFrame colors={colors}>
      Hello!
    </RainbowFrame>
  );
}

export default App;
