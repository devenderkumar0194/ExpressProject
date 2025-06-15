const userService = require('../services/user.service.js');

const register = async (req, res, next) => {
  try {
    const user = await userService.register(req.body);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await userService.login(req.body);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};


const profile = async (req, res, next) => {
  try {
    const authUser = req.user;
    const user = await userService.profile(authUser);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};





module.exports = {
  register,
  login,
  profile
}
