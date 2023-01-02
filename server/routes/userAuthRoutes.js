const express = require('express'); 


const router  = express.Router(); 

const userAuthController = require('../controllers/userAuth')
const profileController = require("../controllers/profileController")

router.post('/login', userAuthController.login);
router.post('/update-user', userAuthController.login, profileController.updateProfile);
router.post('/register', userAuthController.signUp);
router.get('/isauth', userAuthController.checkAuth);

module.exports = router;