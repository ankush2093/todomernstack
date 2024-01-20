const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI; // Make sure you have the MongoDB URI in your .env file
const routes =require("./routes/TaskRoute")
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
