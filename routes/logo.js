const express = require("express");
const { getLogo } = require("../controller/fetchingLogoController.js");

const router = express.Router();

router.get("/logo", getLogo);

  
module.exports = router;