import React, { useState } from "react";
import axios from "axios";
import "./Skin.scss";

const Stomach = () => {
  const [val, setVal] = useState({
    itching: -1,
    stomachpain: -1,
    acidity: -1,
    ulcersontongue: -1,
    vomiting: -1,
    cough: -1,
    sunkeneyes: -1,
    dehydration: -1,
    indigestion: -1,
    yellowishskin: -1,
    nausea: -1,
    lossofappetite: -1,
    abdominalpain: -1,
    diarrhoea: -1,
    yellowingofeyes: -1,
    chestpain: -1,
    passageofgases: -1,
    internalitching: -1,
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
    let ctr = 0;
    for (const item in val) {
      if (val[item] === -1) {
        alert("enter!");
        return;
      }
      ctr = ctr + Number(val[item]);
    }
    console.log("ctr", ctr);
    if (ctr < 2) {
      alert("no disease!");
      return;
    }

    const { data } = await axios.post("/api/predict/stomach", val);
    setResult(data.answer);
    console.log(data.answer);
  };

  return (
    <div className="container-fluid">
      <div className="predictContainer">
        <h3>Stomach Issue Prediction</h3>
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Itching</label>
              <select
                id="inputState"
                class="form-control"
                name="itching"
                value={val.itching}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Stomach Pain</label>
              <select
                id="inputState"
                class="form-control"
                name="stomachpain"
                value={val.stomachpain}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Acidity</label>
              <select
                id="inputState"
                class="form-control"
                name="acidity"
                value={val.acidity}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Ulcers on Tongue</label>
              <select
                id="inputState"
                class="form-control"
                name="ulcersontongue"
                value={val.ulcersontongue}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Vomiting</label>
              <select
                id="inputState"
                class="form-control"
                name="vomiting"
                value={val.vomiting}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Cough</label>
              <select
                id="inputState"
                class="form-control"
                name="cough"
                value={val.cough}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Sunken Eyes</label>
              <select
                id="inputState"
                class="form-control"
                name="sunkeneyes"
                value={val.sunkeneyes}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Dehydration</label>
              <select
                id="inputState"
                class="form-control"
                name="dehydration"
                value={val.dehydration}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Indigestion</label>
              <select
                id="inputState"
                class="form-control"
                name="indigestion"
                value={val.indigestion}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Yellowish Skin</label>
              <select
                id="inputState"
                class="form-control"
                name="yellowishskin"
                value={val.yellowishskin}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Nausea</label>
              <select
                id="inputState"
                class="form-control"
                name="nausea"
                value={val.nausea}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Loss of Appetite</label>
              <select
                id="inputState"
                class="form-control"
                name="lossofappetite"
                value={val.lossofappetite}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Abdominal Pain</label>
              <select
                id="inputState"
                class="form-control"
                name="abdominalpain"
                value={val.abdominalpain}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Diarrhoea</label>
              <select
                id="inputState"
                class="form-control"
                name="diarrhoea"
                value={val.diarrhoea}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Yellowing of Eyes</label>
              <select
                id="inputState"
                class="form-control"
                name="yellowingofeyes"
                value={val.yellowingofeyes}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Chest Pain</label>
              <select
                id="inputState"
                class="form-control"
                name="chestpain"
                value={val.chestpain}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Passage of Gases</label>
              <select
                id="inputState"
                class="form-control"
                name="passageofgases"
                value={val.passageofgases}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Internal Itching</label>
              <select
                id="inputState"
                class="form-control"
                name="internalitching"
                value={val.internalitching}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
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

export default Stomach;
