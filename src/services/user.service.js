const User = require('../models/user.model');
const CustomError = require('../utils/customError');


const register = async (data) => {
    const user = await User.findOne({email : data.email});
    if(user){
       throw new CustomError('User with this email already exists', 409);
    }    
    const newUser = new User(data);
    return await newUser.save();
};

module.exports = {
  register
}