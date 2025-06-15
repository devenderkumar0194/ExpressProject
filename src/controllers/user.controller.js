const userService = require('../services/user.service.js');

const register = async (req, res, next) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,

}
