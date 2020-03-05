function address(database, type) {
	const Address = database.define(
		'address',
		{
			id: {
				type: type.UUID,
				defaultValue: type.UUIDV4,
				primaryKey: true
			},
			city: type.STRING,
			state: type.STRING
		},
		{
			timestamps: true,
			freezeTableName: true
		}
	);

	Address.associate = function(models) {
		Address.belongsTo(models.User);
	};
    Address.createData = async (req) =>{
        Address.create({
            detailId : req.user_id,
            city : req.city,
            state : req.state
        })
    }
	return Address;
}

module.exports = address;
