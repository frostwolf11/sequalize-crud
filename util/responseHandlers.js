let responseHandle = async (req,res) => {
	res.status(res.status_code).json({message:res.message})
	
};

module.exports = { responseHandle };
