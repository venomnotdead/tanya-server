const express = require("express");
const router = express.Router();
const { getIntentTimeline } = require("../controller/intentTimelineController.js");

router.get("/intent-timeline", getIntentTimeline);

module.exports = router;
