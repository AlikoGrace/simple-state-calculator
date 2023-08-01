import {useState} from "react";


const Add = ()=>{
    const[enteredNumbers, setEnteredNumbers]=useState({
        first:0,
        second:0
    })
    const ChangeFirstNumberHandler=(event)=>{
        setEnteredNumbers((prevNumbers)=>({
            first: +event.target.value,
            second: prevNumbers.second
        //     the plus in front of the first is to convert the entered input to a number
            //the previous doesn't have it because, previous has been turned to a number already
        }))
    }

    const ChangeSecondNumberHandler=(event)=>{
        setEnteredNumbers((prevNumbers)=>({
            first: prevNumbers.first,
            // this is accessing the first value from the previous number object
            // prevNumbers is a reference to the previous state of the enteredNumbers state.
            second: +event.target.value,
        }))
    }
    const result=enteredNumbers.first+enteredNumbers.second

    return(
        <div>
            <p>
            <input type="number" className="box" onChange={ChangeFirstNumberHandler}/>
                <select name="" id="">
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="devide">/</option>
                </select>
            <input type="number" className="box" onChange={ChangeSecondNumberHandler}/>={result}
            </p>
        </div>
    )

}

export default Add