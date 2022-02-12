const Data = require("./src/models/Data");
const { Router } = require("express");
const routes = Router();

routes.get("/data", async (req, res) => {
  const data = await Data.find();
  return res.json(data);
});

module.exports = routes;
