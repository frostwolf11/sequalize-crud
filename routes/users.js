var express = require('express');
var router = express.Router();
const validators = require("../validators/req-validators")
const userController = require("../controllers/user-controller");

router.post('/create',validators,userController.userRegister);

module.exports = router;
