const db = require('../db');
const providers = require('../providers/creation-provider');
const reqUser = require('../providers/error-check');

exports.userRegister = async (req, res, next) => {
	try {
		let request_Validate = await reqUser(req);
		let user_details = await providers.validateCreation(req.body);
		let user_create = await db.User.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: req.body.password,
			username: req.body.username
		});
		let Value = {
			message: 'Created',
			status_code: 201,
			errorStatus: false
		};
		req.Value = Value;
		return next();
	} catch (error) {
		let Value = {
			message: error.message,
			status_code: 500,
			errorStatus: true
		};
		req.Value = Value;
		return next();
	}
};
