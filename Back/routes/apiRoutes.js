const express = require("express");

const apiController = require("../controllers/apiController");

const router = express.Router();

router.get("/", apiController.getAllPosts);
router.post("/", apiController.createPosts);
router.get("/:oid", apiController.getDetailedPost);

module.exports = router;
