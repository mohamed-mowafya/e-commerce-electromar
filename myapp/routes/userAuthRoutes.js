const express = require('express'); 


const router  = express.Router(); 

const userAuthController = require('../controllers/userAuth')

router.post('/login',userAuthController.login);
router.post('/register',userAuthController.signUp)

module.exports = router;