const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const predictRoutes = require("./routes/predict");
const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/predict", predictRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
