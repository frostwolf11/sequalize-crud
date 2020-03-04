const Model = require('../db');
const providers = require('../providers/creation-provider')
const pr = require('../providers/error-check')
exports.userRegister = async (req, res) => {          
    try {
      let pd = await pr(req)
      let user_details = await providers.validateCreation(req.body)
      let user_create = await Model.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
      });
      res.status(201).json({
        message: "user Created"
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };