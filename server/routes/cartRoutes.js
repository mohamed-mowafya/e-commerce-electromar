const express = require('express'); 
const router  = express.Router(); 

const cartController = require('../controllers/cartController')

router.get('/cart',cartController.getCart)
router.post('/cart',cartController.addToCart)
router.delete('/cart/:productId',cartController.removeFromCart)

module.exports = router;