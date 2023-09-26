const router = require("express").Router();
const Auth = require("../Middleware/auth");

const { createAccount, login } = require("../Controller/User");

router.route('/createaccount').post(createAccount)
router.route('/login').post(login)

module.exports = router