const express = require("express");
const scrapController = require("../controllers/scrapController")

const router = express.Router();

router
  .route("/")
  .post(scrapController.sastoDeal)  
  // .get(scrapController.sastoDeal)
    


// router
//   .route("/daraz")
//   .get(
//     scrapController.scrapDaraz,
//   );

module.exports = router;
