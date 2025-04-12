const express = require("express");
const router = express.Router();
const { getIntentSummary } = require("../controller/intentSummaryController.js");

router.get("/intent-summary", getIntentSummary);

module.exports = router;
