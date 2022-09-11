import React, { useState } from "react";
import axios from "axios";
import "./Skin.scss";

const Insurance = () => {
  const [val, setVal] = useState({
    age: 0,
    sex: "",
    bmi: 0,
    children: 0,
    smoker: "",
    region: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "/api/predict/insurance",
      val
    );
    setResult(data.answer);
    console.log(data.answer);
  };

  return (
    <div className="container-fluid">
      <div className="predictContainer">
        <h3>Health Insurance</h3>
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Age</label>
              <input
                type="number"
                id="inputState"
                className="form-control"
                name="age"
                value={val.age}
                onChange={handleChange}
              />
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Sex</label>
              <select
                id="inputState"
                class="form-control"
                name="sex"
                value={val.sex}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value="male">MALE</option>
                <option value="female">FEMALE</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">BMI</label>
              <input
                type="number"
                id="inputState"
                className="form-control"
                name="bmi"
                value={val.bmi}
                onChange={handleChange}
              />
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Number of children</label>
              <input
                type="number"
                id="inputState"
                className="form-control"
                name="children"
                value={val.children}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Smoker</label>
              <select
                id="inputState"
                class="form-control"
                name="smoker"
                value={val.smoker}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Region</label>
              <select
                id="inputState"
                class="form-control"
                name="region"
                value={val.region}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value="northwest">North-West</option>
                <option value="northeast">North-East</option>
                <option value="southeast">South-East</option>
                <option value="southwest">South-West</option>
              </select>
            </div>
          </div>
          <div className="btnContainer">
            <button type="submit" class="btn btn-primary">
              Predict
            </button>
          </div>
        </form>
        <h3>{result}</h3>
      </div>
    </div>
  );
};

export default Insurance;
