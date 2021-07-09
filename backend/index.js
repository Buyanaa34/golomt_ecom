const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const PORT = 8443;

const routesHandler = require("./routes/handler");
app.use("/", routesHandler("idk", "idk"));

app.listen(PORT, () => {
  console.log("Server is running on port 8443");
});
