
import './App.css';
import Calculation from "./components/Calculation";
import {useState} from "react";
import Result from "./components/Result";

function App() {
   const [enterdNumbers,setEnteredNumbers]=useState({
       first:0,
       second:0
   })

    const [chosenOperator,setChosenOperator]= useState('add')
    const ChangeFirstNumberHandler = (event)=>{
       setEnteredNumbers((prevNumbers)=>({
           first: +event.target.value,
           second: prevNumbers.second
       }))
    }

    const ChangeSecondNumberHandler =(event)=>{
       setEnteredNumbers((prevNumbers)=>({
           first: prevNumbers.first,
           second: +event.target.value
       }))
    }

    const ChosenOperatorHandler=(event)=>{
       setChosenOperator(event.target.value)
    }

    let result;
   if(chosenOperator==='add'){
       result=enterdNumbers.first+enterdNumbers.second
   }else if(chosenOperator==='subtract'){
       result=enterdNumbers.first-enterdNumbers.second
   }else if(chosenOperator==='multiply'){
       result=enterdNumbers.first*enterdNumbers.second
   }
   else {
       result=enterdNumbers.first/enterdNumbers.second
    }
  return (
    <div>
      <Calculation
          onFirstNumberChanged={ChangeSecondNumberHandler}
          onSecondNumberChanged={ChangeFirstNumberHandler}
          onChosenOperator={ChosenOperatorHandler}
      />
        <Result calculationResult={result} />
    </div>
  );
}

export default App;
