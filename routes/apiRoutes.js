const express = require("express");

const router = express.Router();
const {createAPI,updateAPI,getAPIById,getAPIs,deleteAPI} = require("../controllers/apiController");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(protect,admin,createAPI).get(getAPIs);
// router.put("/update-notification-token", protect, updateUser);
// router.post("/login", authUser);

router
  .route("/:id")
  .delete(protect, admin, deleteAPI)
  .get(protect, admin, getAPIById)
  .put(protect, admin, updateAPI);

// router.post("/renew-token", protect, renewToken);
// router.get("/get-addresses", protect, getUserAddress);

module.exports = router;