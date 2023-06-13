const express = require("express");
require("dotenv").config();
require("./dbconnection/connection");
const router = require("./router/route");

const app = express();
const port = process.env.PORT || 4000;


app.use(express.json());
app.use(router)

// listen
app.listen(port, () => {
  console.log(`Server is running on port ${port} : http://localhost:${port}`);
});
