const express = require('express'); 


const router  = express.Router(); 

const productsController = require('../controllers/productsController')

router.post('/product',productsController.createProduct);
router.put('/product',productsController.updateProduct);
router.delete('/product',productsController.deleteProduct);

module.exports = router;