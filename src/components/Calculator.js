import React, { useState } from "react";
import Selection from "./Selection";
import Result from "./Result";

const Calculator = () => {
  const [formData, setFormData] = useState({
    bill: "",
    tip: "",
    numOfPeople: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  /**
   * Function to validate the input for @numOfPeople
   *
   * @param {*} numberOfPeople
   */
  function validateNumberOfPeople(numberOfPeople) {
    // Converting the given input to a number
    numberOfPeople = Number(numberOfPeople);

    // Checking if the input is not a number
    if (isNaN(numberOfPeople)) {
      return false;
    }

    // Number of people cannot exists in a whole number
    if (numberOfPeople.toFixed() != numberOfPeople) {
      return false;
    }

    // Number of people cannot be 0 and negative
    return numberOfPeople < 1 ? false : true;
  }

  const redBorder = {
    border:
      formData.numOfPeople === ""
        ? "none"
        : !validateNumberOfPeople(formData.numOfPeople)
        ? "2px solid var(--dark-red)"
        : "none",
    outline:
      formData.numOfPeople === ""
        ? ""
        : !validateNumberOfPeople(formData.numOfPeople)
        ? "none"
        : "",
  };

  const handleReset = () =>
    setFormData({
      bill: "",
      tip: "",
      numOfPeople: "",
    });

  return (
    <div className="calculator">
      <div className="calculator--container">
        <label htmlFor="bill" className="calculator--item">
          Bill
        </label>
        <input
          type="text"
          onChange={handleChange}
          name="bill"
          id="bill"
          value={formData.bill}
          className="calculator--input-dollar"
        />
      </div>

      <div className="calculator--container">
        <p className="calculator--item">Select Tip %</p>
        <Selection handleChange={handleChange} tip={formData.tip} />
      </div>

      <div className="calculator--container people--container">
        <label htmlFor="numOfPeople" className="calculator--item">
          <span>Num of People</span>
          {!validateNumberOfPeople(formData.numOfPeople) && (
            <span className="alert">
              {formData.numOfPeople !== ""
                ? isNaN(Number(formData.numOfPeople))
                  ? "Must be a number"
                  : "Can't be zero"
                : null}
            </span>
          )}
        </label>
        <input
          type="text"
          onChange={handleChange}
          name="numOfPeople"
          id="numOfPeople"
          value={formData.numOfPeople}
          className="calculator--input-person"
          style={redBorder}
        />
      </div>

      <Result formData={formData} handleReset={handleReset} />
    </div>
  );
};

export default Calculator;
