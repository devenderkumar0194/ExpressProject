const User = require('../models/user.model');
const CustomError = require('../utils/customError');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/token');

const register = async (data) => {
    const user = await User.findOne({email : data.email});
    if(user){
       throw new CustomError('User with this email already exists', 409);
    }    

    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    const newUser = new User(data);
    return await newUser.save();
};


const login = async (data) => {
  const { email } = data;
    const user = await User.findOne({email});  

    if(!user){
       throw new CustomError('invalid credentials', 409);
    }else {
      const isMatch = await bcrypt.compare(data.password, user.password);
      if (!isMatch) {
        throw new CustomError('invalid credentials', 409);
      } 

      const token = generateToken(user);
      return { token, user: { id: user._id, email: user.email } };
    }
    
};



const profile = async (data) => {
  return { message: 'Secure user profile', user: data };
};


module.exports = {
  register,
  login,
  profile
}