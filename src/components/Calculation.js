
const Calculation = ({
    onFirstNumberChanged,
    onSecondNumberChanged,
    onChosenOperator})=>{

    return(
        <div>
            <p>
            <input type="number" className="box" onChange={onFirstNumberChanged}/>
                <select onChange={onChosenOperator}>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select>
            <input type="number" className="box" onChange={onSecondNumberChanged}/>=
            </p>
        </div>
    )

}

export default Calculation