const express = require("express");
const router = express.Router();
const { getPushNotificationStats } = require("../controller/pushNotificationStatsController.js");

router.get("/intent-push-notification-stats", getPushNotificationStats);

module.exports = router;
