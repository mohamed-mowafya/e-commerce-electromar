const Cart = require("../models/cart");
const Product = require("../models/products");

const getCart = async (req, res) => {
  if (!req.user) return res.status(401).send("Unauthorized");
  const userId = req.user.id;

  try {
    let cart = await Cart.findOne({ userId }).populate({
      path: "items.product",
      model: "Product",
    });

    if (cart) {
      // If cart exists and has items.
      res.send(cart);
    } else {
      res.send("Cart doesn't exist");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const addToCart = async (req, res) => {
  if (!req.user) return res.status(401).send("Unauthorized");
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne({ userId }).populate({
      path: "items.product",
      model: "Product",
    });

    let product = await Product.findOne({ _id: productId });

    if (!product) {
      res.status(400).send("Product not found.");
    }

    const price = product.price;
    const productObj = { product: productId, quantity };

    if (cart) {
      // If user has an existing cart in db
      const productAlreadyExists = cart.items.find(
        (item) => item.product._id == productId
      );
      const addedTotal = Number((quantity * price).toFixed(2));
      if (productAlreadyExists) {
        // If product already exists in cart, update quantity and total.
        productAlreadyExists.quantity += quantity;
        cart.total += addedTotal; // Quantity sent by client.
        await cart.save();
      } else {
        cart.items.push(productObj);
        cart.total += addedTotal;
        cart = await cart.save();
      }
    } else {
      // User doesn't have a cart in db.
      cart = await Cart.create({
        userId,
        items: [productObj],
        total: quantity * price,
      });
    }

    return res.status(201).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const emptyCart = async (req, res) => {
  if (!req.user) return res.status(401).send("Unauthorized");
  const userId = req.user.id;

  let cart = await Cart.findOne({ userId }).populate({
    path: "items.product",
    model: "Product",
  });

  cart.items = [];
  cart.total = 0;
  cart = await cart.save();

  return res.status(201).send(cart);
};

const removeFromCart = async (req, res) => {
  if (!req.user) return res.status(401).send(req.user);
  const userId = req.user.id;
  const productId = req.params.productId;
  const deleteAll = req.query.deleteAll === "true";

  try {
    let cart = await Cart.findOne({ userId }).populate({
      path: "items.product",
      model: "Product",
    });

    if (!deleteAll) {
      let productIndex = cart.items.findIndex(
        (item) => item.product._id == productId
      );

      // In the case that the requested product doesn't exit in the cart.
      if (productIndex === -1)
        return res.status(400).send("Product not found in cart.");
      let product = cart.items[productIndex];

      const substractedTotal = Number(
        (cart.total - product.product.price).toFixed(2)
      );
      cart.total = substractedTotal;
      product.quantity -= 1; // Reduce quantity by 1.

      if (product.quantity == 0) cart.items.splice(productIndex, 1); // Remove item from the cart items array if quantity is 0.
    } else {
      console.log("helphelp");
      let productIndex = cart.items.findIndex(
        (item) => item.product._id == productId
      );
      let product = cart.items[productIndex];
      const substractedTotal = Number(
        (cart.total - product.product.price * product.quantity).toFixed(2)
      );
      cart.total = substractedTotal;
      cart.items.splice(productIndex, 1);
    }

    cart = await cart.save();

    res.status(201).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { removeFromCart, addToCart, getCart };
