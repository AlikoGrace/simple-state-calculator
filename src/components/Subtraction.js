import {useState} from "react";

const Subtract = ()=>{
    const [enteredNumbers,setEnteredNumbers]=useState({
        first:0,
        second:0
    })
    const ChangeFirstNumberhanler=(event)=>{
         setEnteredNumbers((prevNumbers)=>({
             first: +event.target.value,
             second: prevNumbers.second
         }))
    }
    const ChangeSecondNumberhandler=(event)=>{
        setEnteredNumbers((prevNumber)=>({
            first: prevNumber.first,
            second: +event.target.value
        }))
    }
    const result= enteredNumbers.first-enteredNumbers.second
    return(
        <div>
            <p>
            <input type="number" className="box" onChange={ChangeFirstNumberhanler}/>
            -
            <input type="number" className="box" onChange={ChangeSecondNumberhandler}/>={result}
            </p>
        </div>
    )

}
export default Subtract