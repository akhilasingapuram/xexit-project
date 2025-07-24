const express = require("express");
const auth = require("../middleware/auth");
const Resignation = require("../models/Resignation");
const ExitResponse = require("../models/ExitResponse");

const router = express.Router();

router.get("/resignations", auth("admin"), async (req, res) => {
  const resignations = await Resignation.find();
  res.json({ data: resignations });
});

router.put("/conclude_resignation", auth("admin"), async (req, res) => {
  const { resignationId, approved, lwd } = req.body;
  await Resignation.findByIdAndUpdate(resignationId, {
    status: approved ? "approved" : "rejected",
    lwd,
  });
  res.json({ message: "Resignation updated" });
});

router.get("/exit_responses", auth("admin"), async (req, res) => {
  const responses = await ExitResponse.find();
  res.json({ data: responses });
});

module.exports = router;
