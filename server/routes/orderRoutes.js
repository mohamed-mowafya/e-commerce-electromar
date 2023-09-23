const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

router.get("/orders", orderController.getUserOrders);
router.post("/orders", orderController.addOrder);

module.exports = router;
