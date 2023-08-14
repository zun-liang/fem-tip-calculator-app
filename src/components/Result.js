import React from "react"

const Result = props => 
    <div className="result">
        <div className="result--container">
            <h1 className="result--title">Tip Amount</h1>
            <p className="result--person">/ person</p>
        </div>
        <h2 className="result--number">
            ${props.formData.numOfPeople === 0
                ? Number(0).toFixed(2)
                : props.formData.numOfPeople > 0 
                ? Number(props.formData.bill * props.formData.tip / 100 / props.formData.numOfPeople).toFixed(2)
                : Number(0).toFixed(2)}
        </h2>
        <div className="result--container">
            <h2 className="result--title">Total</h2>
            <p className="result--person">/ person</p>
        </div>
        <h2 className="result--number">
            ${props.formData.numOfPeople === 0
                ? Number(0).toFixed(2)
                : props.formData.numOfPeople > 0
                ? Number(props.formData.bill * (1 + props.formData.tip / 100) / props.formData.numOfPeople).toFixed(2)
                : Number(0).toFixed(2)}
        </h2>
        <button 
            className="result--button" 
            onClick={props.handleReset}>
            RESET
        </button>
    </div>

export default Result