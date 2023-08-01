
import './App.css';
import Add from "./components/Calculation";
import Subtract from "./components/Subtraction";
import Multiply from "./components/Multiplication";
import Divide from "./components/Division";

function App() {
  return (
    <div>
      <Add/>
      <Subtract/>
      <Multiply/>
      <Divide/>
    </div>
  );
}

export default App;
