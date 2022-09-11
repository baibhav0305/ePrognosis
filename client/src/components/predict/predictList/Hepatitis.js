import React, { useState } from "react";
import axios from "axios";
import "./Skin.scss";

const Hepatitis = () => {
  const [val, setVal] = useState({
    itching: -1,
    jointpain: -1,
    vomiting: -1,
    fatigue: -1,
    lethargy: -1,
    highfever: -1,
    yellowishskin: -1,
    darkurine: -1,
    nausea: -1,
    lossofappetite: -1,
    abdominalpain: -1,
    diarrhoea: -1,
    mildfever: -1,
    yellowurine: -1,
    yellowingofeyes: -1,
    acuteliverfailure: -1,
    malaise: -1,
    musclepain: -1,
    familyhistory: -1,
    recievingbloodtransfusion: -1,
    recievingunsterileinjections: -1,
    coma: -1,
    stomachbleeding: -1,
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

    const { data } = await axios.post(
      "/api/predict/hepatitis",
      val
    );
    setResult(data.answer);
    console.log(data.answer);
  };

  return (
    <div className="container-fluid">
      <div className="predictContainer">
        <h3>Hepatitis Prediction</h3>
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
              <label for="inputState">Joint Pain</label>
              <select
                id="inputState"
                class="form-control"
                name="jointpain"
                value={val.jointpain}
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
              <label for="inputState">Fatigue</label>
              <select
                id="inputState"
                class="form-control"
                name="fatigue"
                value={val.fatigue}
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
              <label for="inputState">Lethargy</label>
              <select
                id="inputState"
                class="form-control"
                name="lethargy"
                value={val.lethargy}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">High Fever</label>
              <select
                id="inputState"
                class="form-control"
                name="highfever"
                value={val.highfever}
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
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Dark Urine</label>
              <select
                id="inputState"
                class="form-control"
                name="darkurine"
                value={val.darkurine}
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
              <label for="inputState">Mild Fever</label>
              <select
                id="inputState"
                class="form-control"
                name="mildfever"
                value={val.mildfever}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Yellow Urine</label>
              <select
                id="inputState"
                class="form-control"
                name="yellowurine"
                value={val.yellowurine}
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
              <label for="inputState">Acute Liver Failure</label>
              <select
                id="inputState"
                class="form-control"
                name="acuteliverfailure"
                value={val.acuteliverfailure}
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
              <label for="inputState">Malaise</label>
              <select
                id="inputState"
                class="form-control"
                name="malaise"
                value={val.malaise}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Muscle Pain</label>
              <select
                id="inputState"
                class="form-control"
                name="musclepain"
                value={val.musclepain}
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
              <label for="inputState">Family History</label>
              <select
                id="inputState"
                class="form-control"
                name="familyhistory"
                value={val.familyhistory}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Recieving Blood Transfusion</label>
              <select
                id="inputState"
                class="form-control"
                name="recievingbloodtransfusion"
                value={val.recievingbloodtransfusion}
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
              <label for="inputState">Recieving Unsterile Injections</label>
              <select
                id="inputState"
                class="form-control"
                name="recievingunsterileinjections"
                value={val.recievingunsterileinjections}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4">
              <label for="inputState">Coma</label>
              <select
                id="inputState"
                class="form-control"
                name="coma"
                value={val.coma}
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
              <label for="inputState">Stomach Bleeding</label>
              <select
                id="inputState"
                class="form-control"
                name="stomachbleeding"
                value={val.stomachbleeding}
                onChange={handleChange}
              >
                <option selected>Select</option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div class="mx-auto form-group col-md-4"></div>
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

export default Hepatitis;
