const {Router} = require('express');
const authController = require('../Controllers/authControllers');


const router = Router();

router.post('/signup', authController.SignUp)
router.post('/signIn',authController.Login);
router.post('/logout',authController.Logout);

module.exports = router;