let success = async (res, status) => {
	res.status(status).json({ message: 'Success' });
};

let error = async (res, error, status) => {
	res.status(status).json({ message: error.message });
};

module.exports = { success, error };
