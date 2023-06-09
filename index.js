//create application
const express = require("express");
const app = express();

//port find kro
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middle ware add kro
app.use(express.json());

// db connect
const db = require("./config/mongooseDB");
db.connect();

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

//mounting routes
const importingRoutes = require("./routes/getAllDataRoute");
app.use("/api/v1", importingRoutes);


//this is default route
app.get('/', (req, res) => {
  res.send(`<h1>This is home page </h1>`)
})

