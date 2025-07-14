const express = require("express");
const bodyParser = require("body-parser");
const sum = require("./sum");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/sum", (req, res) => {
  console.log(JSON.stringify(req.body));
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  console.log(num1, num2);
  try {
    const result = sum(num1, num2);
    res.render("result", { num1, num2, result });
  } catch (err) {
    res.render("error", { message: err.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
