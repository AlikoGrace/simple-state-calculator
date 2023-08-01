import {useState} from "react";

const Divide = ()=>{
    const [enteredNumbers,setEnteredNumbers]=useState({
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
            second: +event.target.value
        }))
    }
    const result= enteredNumbers.first/enteredNumbers.second
    return(
        <div>
            <p>
            <input type="number" className="box" onChange={ChangeFirstNumberHandler}/>
            /
            <input type="number" className="box" onChange={ChangeSecondNumberHandler}/>={result}
            </p>
        </div>
    )

}
export default Divide