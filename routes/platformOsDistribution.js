const express = require("express");
const router = express.Router();
const { getPlatFormOsDistribution } = require("../controller/platformOsDistributonController.js");

router.get("/platform-os-distribution", getPlatFormOsDistribution);

module.exports = router;
