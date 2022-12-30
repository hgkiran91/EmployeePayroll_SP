import express from 'express';
import { get } from 'mongoose';
import * as employeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { employeeValidator } from '../validators/user.validator';

const router = express.Router();

//route to add new employees
router.post('', employeeValidator, userAuth, employeeController.addEmployee);

//route to get employee
router.get('/:id', userAuth, employeeController.getEmployeeById);

//route to get all employees
router.get('', userAuth, employeeController.getAllEmployee);

//route to update employee
router.put('/:id', userAuth, employeeController.updateEmplpoyee);

//route to delete employee
router.delete('/:id', userAuth, employeeController.deleteEmployee);

export default router;