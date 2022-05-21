const express = require("express");
const scrapController = require("../controllers/scrapController");

const router = express.Router();

router
  .route("/")
  .post(
    scrapController.scrapAmazon,
    scrapController.scrapEbay,
    scrapController.scrapSnapdeal,
    scrapController.bbcScrap,
    scrapController.onlineKhabarScrap
  );

  router.route("/news").get(scrapController.bbcScrap)

// router
//   .route("/daraz")
//   .get(
//     scrapController.scrapDaraz,
//   );

module.exports = router;
