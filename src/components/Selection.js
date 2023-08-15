import React from "react"

const Selection = props => 
    <div className="selection">
        <input 
            type="radio"
            id="5%"
            name="tip"
            value="5"
            checked={props.tip === "5"}
            onChange={props.handleChange} 
            className="selection--radio"/>
        <label htmlFor="5%" className="selection--option">5%</label>

        <input 
            type="radio"
            id="10%"
            name="tip"
            value="10"
            checked={props.tip === "10"}
            onChange={props.handleChange} 
            className="selection--radio"/>
        <label htmlFor="10%" className="selection--option">10%</label>

        <input 
            type="radio"
            id="15%"
            name="tip"
            value="15"
            checked={props.tip === "15"}
            onChange={props.handleChange} 
            className="selection--radio"/>
        <label htmlFor="15%" className="selection--option">15%</label>

        <input 
            type="radio"
            id="25%"
            name="tip"
            value="25"
            checked={props.tip === "25"}
            onChange={props.handleChange} 
            className="selection--radio"/>
        <label htmlFor="25%" className="selection--option">25%</label>

        <input 
            type="radio"
            id="50%"
            name="tip"
            value="50"
            checked={props.tip === "50"}
            onChange={props.handleChange} 
            className="selection--radio"/>
        <label htmlFor="50%" className="selection--option">50%</label>

        <input 
            type="number" 
            placeholder="Custom" 
            onChange={props.handleChange}
            name="tip"
            value={props.tip}
            className="selection--custom"/>
    </div>

export default Selection