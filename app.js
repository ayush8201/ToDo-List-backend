const express = require("express");
const dotenv = require("dotenv");
const conn = require("./conn/conn");
const authRoutes = require("./routes/auth");
const app = express();
dotenv.config();

conn();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
