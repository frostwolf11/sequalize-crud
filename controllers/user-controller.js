const db = require('../db');
const providers = require('../providers/creation-provider');
const reqUser = require('../providers/error-check');
const handlers = require('../util/responseHandlers');
exports.userRegister = async (req, res) => {
	try {
		let request_Validate = await reqUser(req.body);
		let user_details = await providers.validateCreation(req.body);
		let user_create = await db.User.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: req.body.password,
			username: req.body.username
		});
		await handlers.success(res, 201);
	} catch (error) {
		await handlers.error(res, error, 500);
	}
};
