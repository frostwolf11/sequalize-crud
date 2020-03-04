const Sequelize = require('sequelize');
const databaseUri = require('./config')
const userModel = require('./models/userModel')


const sequelize = new Sequelize(databaseUri.psql_url)

sequelize.authenticate().then(() => {
    console.log("Success!");
}).catch((err) => {
    console.log(err);
    proccess.exit(0)
});

const User = userModel(sequelize, Sequelize)

sequelize.sync({})
    .then(() => {
        console.log("Created")
    })

module.exports = {User}