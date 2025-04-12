const express = require("express");
const { fetchToken } = require("../controller/authController.js");

const router = express.Router();

router.get("/auth/token", fetchToken);

module.exports = router;
