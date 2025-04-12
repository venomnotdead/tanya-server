const express = require("express");
const router = express.Router();
const { getIntentGeoDistribution } = require("../controller/intenteGeoDistribution.js");

router.get("/intent-geo-distribution", getIntentGeoDistribution);

module.exports = router;
