const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  return res.json(data);
});

app.listen(9000);
