const db = require('../db');
const providers = require('../providers/creation-provider');
const reqUser = require('../providers/error-check');

exports.userRegister = async (req, res, next) => {
	try {
		let request_Validate = await reqUser(req);
		let user_details = await providers.validateCreation(req.body);
		let user_create = await db.User.createUser(req.body);
		req.body.user_id = user_create;
		let address_create = await db.Address.createData(req.body);
		res.status_code = 201;
		res.message = 'Created';
		return next();
	} catch (error) {
		res.status_code = 500;
		res.message = error.message;
		return next();
	}
};

exports.userLogin = async (req, res, next) => {
	try {
		let user = await db.User.getMine(req.body);
		res.status_code = 200;
		res.message = user;
		return next();
	} catch (error) {
		console.log(error);
		res.status_code = 500;
		res.message = error.message;
		return next();
	}
};
