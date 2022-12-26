import sequelize, { DataTypes } from '../config/database';
// const User = require('../models/user')(sequelize, DataTypes);
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

//create new user
export const usersRegistration = async (body) => {
  // console.log("Before hashing body-> ", body);
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);
  body.password = hashPassword;
  const data = await sequelize.query('call sp_addUsers(:first_name, :last_name, :email, :password);', {
    replacements: {
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: body.password
    }
  });
  return data;
};

//login service
export const userLogin = async (body) => {
  const data = await sequelize.query('call sp_userLogin(:email, :password);', {
    replacements: {
      email: body.email,
      password: body.password
    }
  })
  console.log("Response-> ", data[0]);
  if (data) {
    const result = await bcrypt.compare(body.password, data[0]["password"])
    if (result == true) {
      const token = jwt.sign({ "id": data[0]["id"], "first_name": data[0]["first_name"], "email": data[0]["email"] }, process.env.SECRET_KEY);
      // console.log("Token-> ", token);
      return {
        data: data,
        token: token
      }
    }
  }
}


// if (data[0].error_status === 1) {
//   return data;
// } else {
//   const result = await bcrypt.compare(body.password, data[0]["password"])
//   // console.log(result);
//   if (result == true) {
//     const token = jwt.sign({ "id": data[0]["id"], "first_name": data[0]["first_name"], "email": data[0]["email"] }, process.env.SECRET_KEY);
//     console.log("Token-> ", token);
//     return {
//       data: data,
//       token: token
//     }
//   }
// }