import HttpStatus from 'http-status-codes';
import { token } from 'morgan';
import * as UserService from '../services/user.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const usersRegistration = async (req, res, next) => {
  try {
    const data = await UserService.usersRegistration(req.body);
    if (data[0]["error_status"] == 0) {
      res.status(data[0]["statusCode"]).json({
        success: true,
        message: data[0]["message"]
      })
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const userLogin = async (req, res, next) => {
  try {
    const { data, token } = await UserService.userLogin(req.body);
    if (data[0]["error_status"] == 0) {
      res.status(data[0]["statusCode"]).json({
        data: data,
        token: token,
        message: data[0]["message"]
      })
    }
  } catch (error) {
    next(error);
  }
};