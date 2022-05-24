const express = require("express");
const publicController = require("../controllers/publicController");
const { checkKey, handleAPIcall } = require("../middleware/apiMiddleware");

const router = express.Router();

router.route("/news/bbc").get(checkKey, handleAPIcall, publicController.bbcScrap);
router.route("/news/nytimes").get(publicController.newsScrap);
router.route("/news/onlinekhabar").get(publicController.onlineKhabarScrap);
router.route("/ecom/amazon").get(publicController.scrapAmazon);
router.route("/ecom/snapdeal").get(publicController.scrapSnapdeal);
router.route("/ecom/ebay").get(publicController.scrapEbay);
    

module.exports = router;
