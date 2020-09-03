const express = require("express");
const app = express();
const port = 2214;

const compute = require("./compute.js");
const handler = new compute();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("[Handshake] NKUST IC API Server");
});

app.post("/api/auth", handler.authorize);

app.get("*", (req, res) => {
  res.send(
    JSON.stringify({
      status: 404,
    })
  );
});

app.listen(port, () => {
  console.log(`
    NKUST ICSA - API Server is listening on
    http://localhost:${port}
  `);
});
