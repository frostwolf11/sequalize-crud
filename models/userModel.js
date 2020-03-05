function user(database, type) {
	const User = database.define(
		'detail',
		{
			id: {
				type: type.UUID,
				defaultValue: type.UUIDV4,
				primaryKey: true
			},
			first_name: type.STRING,
			username: type.STRING,
			last_name: type.STRING,
			email: {
				type: type.STRING,
				unique: true
			},
			password: type.STRING
		},
		{
			hooks: {
				beforeCreate: (user, options) => {
					return new Promise((resolve, reject) => {
						User.findOne({ where: { email: user.email } }).then((found) => {
							if (found) {
								reject(new Error('Email already exist'));
							} else {
								resolve();
							}
						});
					});
				}
			},
			timestamps: true,
			freezeTableName: true
		}
	);
	return User;
}

module.exports = user;
