import React from "react";

function Result(props) {
    return (
        <div className="result">
            <div className="result--container">
                <p className="result--title">Tip Amount</p>
                <p className="result--person">/ person</p>
            </div>
            <p className="result--number">
                ${props.formData.numOfPeople 
                    ? Number(props.formData.bill * props.formData.tip / 100 / props.formData.numOfPeople).toFixed(2)
                    : Number(0).toFixed(2)}
            </p>
            <div className="result--container">
                <p className="result--title">Total</p>
                <p className="result--person">/ person</p>
            </div>
            <p className="result--number">
                ${props.formData.numOfPeople
                    ? Number(props.formData.bill * (1 + props.formData.tip / 100) / props.formData.numOfPeople).toFixed(2)
                    : Number(0).toFixed(2)}
            </p>
            <button 
                className="result--button" 
                onClick={props.handleReset}>
                RESET
            </button>
        </div>
    )
}

export default Result;