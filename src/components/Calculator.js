import React, { useState } from "react"
import Selection from "./Selection"
import Result from "./Result"

const Calculator = () => {
    const [formData, setFormData] = useState({
        bill: "",
        tip: "",
        numOfPeople: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
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
                : formData.numOfPeople === "0"
                ? "2px solid var(--dark-red)"
                : "none",
        outline: formData.numOfPeople === ""
                 ? ""
                 : formData.numOfPeople === "0"
                 ? "none"
                 : ""
    }

    const handleReset = () => 
        setFormData({
            bill: "",
            tip: "",
            numOfPeople: ""
        })

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
                    {formData.numOfPeople === "0" &&<span className="alert">Can't be zero</span>}
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

export default Calculator