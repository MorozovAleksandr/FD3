import Br2jsx from './Br2jsx.jsx'

function App() {
  let text = "первый<br>второй<br/>третий<br />последний";
  return (
    <Br2jsx text={text} />
  );
}

export default App;
