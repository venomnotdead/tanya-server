// routes/intentSummaryRoutes.js
const express = require("express");
const router = express.Router();
const { getSummaryWithBarChartController } = require("../controller/summaryWithBarChartController.js");

router.post("/summary-bar-chart", getSummaryWithBarChartController);

module.exports = router;
