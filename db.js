const Sequelize = require('sequelize');
const databaseUri = require('./config');
const Models = require('./models/index');
const Op = Sequelize.Op;
const db = {};

const sequelize = new Sequelize(databaseUri.psql_url);

Object.keys(Models).forEach((modelName) => {
	const model = Models[modelName](sequelize, Sequelize.DataTypes);
	db[modelName] = model;
	console.log(`Loading model - ${modelName}`);
});

Object.keys(db).forEach((modelName) => {
	if ('associate' in db[modelName]) {
		console.log(db[modelName]);
		db[modelName].associate(db);
	}
});

sequelize.authenticate();

try {
	sequelize.sync();
	console.log('created');
} catch (error) {
	console.log(error);
}

module.exports = Object.assign({}, db, {
	sequelize,
	Sequelize
});
