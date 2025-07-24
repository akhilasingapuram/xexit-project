const express = require("express");
const auth = require("../middleware/auth");
const Resignation = require("../models/Resignation");
const ExitResponse = require("../models/ExitResponse");

const router = express.Router();

router.post("/resign", auth("employee"), async (req, res) => {
  const resignation = await Resignation.create({
    employeeId: req.user.id,
    lwd: req.body.lwd,
  });
  res.json({ data: { resignation: { _id: resignation._id } } });
});

router.post("/responses", auth("employee"), async (req, res) => {
  await ExitResponse.create({
    employeeId: req.user.id,
    responses: req.body.responses,
  });
  res.json({ message: "Responses submitted" });
});

module.exports = router;
