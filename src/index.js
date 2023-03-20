const express = require("express");

const app = express();

app.get("/",(request, response) => {
  response.send('{ "response": "Hello FastAnalytics! "}');
});

app.listen(3000);

module.exports = app;