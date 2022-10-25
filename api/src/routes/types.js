const { Router } = require("express");
const router = Router();
const { getAlltype } = require("./gets.js");
const { Type } = require("../db.js");
router.get("/", async (req, res) => {
  try {
    const types = await getAlltype();
    const newType = await Type.bulkCreate(types);
    res.status(200).send(newType);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
