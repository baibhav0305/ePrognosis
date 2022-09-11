import axios from "axios";
import React, { useState } from "react";
import "./Skin.scss";

const Skin = () => {
  const [val, setVal] = useState({
    itching: -1,
    skinrash: -1,
    nodalskin: -1,
    jointpain: -1,
    dischrommicpath: -1,
    pusfilledPimple: -1,
    scurring: -1,
    skinpeeling: -1,
    silverlikedusting: -1,
    smalldents: -1,
    inflammatory: -1,
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
      "/api/predict/skin",
      val
    );
    setResult(data.answer);
    console.log(data.answer);
  };

  return (
    <div className="container-fluid">
      <div className="predictContainer">
        <h3>Skin Issue Prediction</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="itching"
                value={val.itching}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="skinrash"
                value={val.skinrash}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                value={val.nodalskin}
                name="nodalskin"
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                name="jointpain"
                className="form-control"
                value={val.jointpain}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="dischrommicpath"
                value={val.dischrommicpath}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="pusfilledPimple"
                value={val.pusfilledPimple}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="scurring"
                value={val.scurring}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="skinpeeling"
                value={val.skinpeeling}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="silverlikedusting"
                value={val.silverlikedusting}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="smalldents"
                value={val.smalldents}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="mx-auto form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select
                id="inputState"
                className="form-control"
                name="inflammatory"
                value={val.inflammatory}
                onChange={handleChange}
              >
                <option selected value={-1}>
                  Select
                </option>
                <option value={1}>YES</option>
                <option value={0}>NO</option>
              </select>
            </div>
            <div className="mx-auto form-group col-md-4"></div>
          </div>
          <div className="btnContainer">
            <button type="submit" className="btn btn-primary">
              Predict
            </button>
          </div>
        </form>
        <h3>{result}</h3>
      </div>
    </div>
  );
};

export default Skin;
