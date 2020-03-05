let responseHandle = async (req, res, value) => {
	let response = await value;
	console.log(response);
	res.status(response.status_code).json({ message: response.message, errorStatus: response.errorStatus });
};

module.exports = { responseHandle };
