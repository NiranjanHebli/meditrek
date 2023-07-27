const express = require('express');
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userCtrl");
const authMiddleware = require('../middlewares/authMiddleware');

//Router inject
const router = express.Router();

//Routes

//Route Login

//For login page||POST
router.post('/login', loginController);

//For register page||POST
router.post('/register', registerController);

//For Auth ||POST 

router.post('/getUserData',authMiddleware,authController)


module.exports = router;
