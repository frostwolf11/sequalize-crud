var express = require('express');
var router = express.Router();
const validators = require('../validators/req-validators');
const userController = require('../controllers/user-controller');
const handlers = require('../util/responseHandlers');

router.post('/create', validators, userController.userRegister,handlers.responseHandle);

module.exports = router;
