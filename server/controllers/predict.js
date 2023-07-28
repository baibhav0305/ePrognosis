const axios = require("axios");

// skin prediction
const skin = async (req, res) => {
  const data = req.body;

  let arr = [];
  for (const val in data) {
    arr.push(Number(data[val]));
  }

  const obj = {
    feat: arr,
  };

  const response = await axios.post(
    "https://eprog-nywl.onrender.com/skin",
    obj
  );
  console.log(response.data);

  res.json(response.data);
};

// hepatitis prediction
const hepatitis = async (req, res) => {
  const data = req.body;

  let arr = [];
  for (const val in data) {
    arr.push(Number(data[val]));
  }
  const obj = {
    feat: arr,
  };

  try {
    const response = await axios.post(
      "https://eprog-nywl.onrender.com/hepatitis",
      obj
    );
    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.json("sorry!");
  }
};

// stomach prediction
const stomach = async (req, res) => {
  const data = req.body;

  let arr = [];
  for (const val in data) {
    arr.push(Number(data[val]));
  }

  const obj = {
    feat: arr,
  };

  try {
    const response = await axios.post(
      "https://eprog-nywl.onrender.com/stomach",
      obj
    );
    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.json("sorry");
  }
};

// breastCancer prediction
const breastCancer = async (req, res) => {
  const data = req.body;

  let arr = [];
  for (const val in data) {
    arr.push(Number(data[val]));
  }

  res.json(arr);
};

// medicalinsurance prediction
const insurance = async (req, res) => {
  const { age, sex, bmi, children, smoker, region } = req.body;

  const obj = {
    age: Number(age),
    sex,
    bmi: Number(bmi),
    children: Number(children),
    smoker,
    region,
  };

  try {
    const response = await axios.post(
      "https://eprog-nywl.onrender.com/medicalinsurance",
      obj
    );
    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.json("sorry");
  }
};

module.exports = { skin, hepatitis, stomach, breastCancer, insurance };
