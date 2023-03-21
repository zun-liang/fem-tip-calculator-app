import React from "react";
import Selection from "./Selection";
import Result from "./Result";

function Calculator() {
    const [formData, setFormData] = React.useState({
        bill: "",
        tip: "",
        numOfPeople: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const redBorder = {
        border: formData.numOfPeople === ""
                ? "none"
                : formData.numOfPeople === 0
                ? "2px solid var(--dark-red)"
                : "none",
        outline: formData.numOfPeople === ""
                 ? ""
                 : formData.numOfPeople === 0
                 ? "none"
                 : ""
    };

    const alert = {
        display: formData.numOfPeople === ""
                 ? "none"
                 : formData.numOfPeople === 0
                 ? "inline"
                 : "none",
        color: formData.numOfPeople === ""
               ? "white"
               : formData.numOfPeople === 0
               ? "var(--dark-red)"
               : "white"
    }

    function handleReset() {
        setFormData({
            bill: "",
            tip: "",
            numOfPeople: ""
        })
    }

    return (
        <div className="calculator">
            <div className="calculator--container">
                <label htmlFor="bill" className="calculator--item">Bill</label>
                <input 
                    type="text"
                    onChange={handleChange}
                    name="bill"
                    id="bill"
                    value={formData.bill}
                    className="calculator--input-dollar"/>
            </div>

            <div className="calculator--container">
                <p className="calculator--item">Select Tip %</p>
                <Selection 
                    handleChange={handleChange}
                    tip={formData.tip}/>
            </div>

            <div className="calculator--container people--container">
                <label htmlFor="numOfPeople" className="calculator--item">
                    <span>Num of People</span>
                    <span className="alert" style={alert}>Can't be zero</span>
                </label>
                
                <input 
                    type="text"
                    onChange={handleChange}
                    name="numOfPeople"
                    id="numOfPeople"
                    value={formData.numOfPeople}
                    className="calculator--input-person" 
                    style={redBorder}/>
            </div>

            <Result 
                formData={formData}
                handleReset={handleReset}/>
        </div>
    )
}

export default Calculator;