const express = require("express");
const scrapController = require("../controllers/scrapController");

const router = express.Router();

router
  .route("/")
  .post(
    scrapController.scrapAmazon,
    scrapController.scrapEbay,
    scrapController.scrapSnapdeal,
    
  );

// router
//   .route("/daraz")
//   .get(
//     scrapController.scrapDaraz,
//   );

module.exports = router;
