import React, { useState } from "react"
import Selection from "./Selection"
import Result from "./Result"

const Calculator = () => {
    const [formData, setFormData] = useState({
        bill: "",
        tip: "",
        numOfPeople: ""
    })

    //Number("") return 0
    const zeroAlert = () => formData.numOfPeople === "0"

    const notIntegerAlert = () => !Number.isInteger(Number(formData.numOfPeople))
  
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const redBorder = {
        border: zeroAlert() || notIntegerAlert()
                ? "2px solid var(--dark-red)"
                : "none",
        outline: zeroAlert() || notIntegerAlert()
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
                    type="number"
                    onChange={handleChange}
                    name="bill"
                    id="bill"
                    value={formData.bill}
                    placeholder="0"
                    className="calculator--input-dollar"/>
            </div>

            <div className="calculator--container">
                <p className="calculator--item">Select Tip %</p>
                <Selection handleChange={handleChange} tip={formData.tip}/>
            </div>

            <div className="calculator--container people--container">
                <label htmlFor="numOfPeople" className="calculator--item">
                    <span>Num of People</span>
                    {zeroAlert() &&<span className="alert">Can't be zero</span>}
                    {notIntegerAlert() && <span className="alert">Integer Only</span>}
                </label>
                <input 
                    type="number"
                    min="1"
                    step="1"
                    onChange={handleChange}
                    name="numOfPeople"
                    id="numOfPeople"
                    value={formData.numOfPeople}
                    placeholder="0"
                    className="calculator--input-person" 
                    style={redBorder}/>
            </div>

            <Result formData={formData} handleReset={handleReset}/>
        </div>
    )
}

export default Calculator