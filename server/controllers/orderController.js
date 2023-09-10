const Order = require("../models/order");
const Cart = require("../models/cart");
const User = require("../models/user");

const getUserOrders = async (req, res) => {
  const userId = req.user.id;
  try {
    Order.find({ userId })
      .sort({ date: -1 })
      .then((orders) => res.json(orders));
  } catch {
    res.json({
      error: "An error has occured while fetching the user's orders.",
    });
  }
};

const addOrder = async (req, res) => {
  /**
   * Route function that will be called on order completion, in order to keep a tarce
   * of the user's order (if successful).
   */
  const userId = req.user.id;
  const cart = await Cart.findOne({ userId });
  const orderNumber = Date.now() + Math.random();

  await Order.create({
    userId,
    orderNo: orderNumber,
    items: cart.items,
    bill: cart.total,
  });
  return res.status(201).send(`Order created for user ${userId}`);
};

module.exports = { getUserOrders, addOrder };
