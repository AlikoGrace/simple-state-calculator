import {useState} from "react";

const Multiply = ()=>{
    const [enteredNumber,setEnteredNumbers]=useState({
        first:0,
        second:0
    })
   const ChangeFirstNumberHandler=(event)=>{
        setEnteredNumbers((prevNumbers)=>({
            first: +event.target.value,
            second: prevNumbers.second
        }))
    }
    const ChangeSecondNumberHandler=(event)=>{
       setEnteredNumbers((prevNumbers)=>({
           first: prevNumbers.first,
           second: event.target.value
       }))
    }

    const result = enteredNumber.first*enteredNumber.second
    return(
        <div>
            <p>
            <input type="number" className="box" onChange={ChangeFirstNumberHandler}/>
            *
            <input type="text" className="box" onChange={ChangeSecondNumberHandler}/>={result}
            </p>
        </div>
    )

}
export default Multiply