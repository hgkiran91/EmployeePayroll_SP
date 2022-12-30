import * as EmployeeService from '../services/employee.service'


/**
 * Controller to add employees
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addEmployee = async (req, res, next) => {
    const data = await EmployeeService.addEmployee(req.body);
    let employeeDetails = {
        id: data[0]["id"],
        emp_name: data[0]["emp_name"],
        emp_email: data[0]["emp_email"],
        emp_dob: data[0]["emp_dob"],
        emp_phone: data[0]["emp_phone"],
        emp_address: data[0]["emp_address"],
        emp_city: data[0]["emp_city"],
        emp_joining_date: data[0]["emp_joining_date"],
        createdBy: data[0]["createdBy"]
    }
    if (data[0]["error_status"] == 0) {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"],
            data: employeeDetails
        })
    } else {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"]
        })
    }
};

/**
 * Controller to get employee by id
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getEmployeeById = async (req, res, next) => {
    const data = await EmployeeService.getEmployeeById(req.params.id, req.body.createdBy);
    if (data[0]["error_status"] == 0) {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"],
        })
    } else {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"]
        })
    }
}

/**
 * Controller to get employee
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllEmployee = async (req, res, next) => {
    const data = await EmployeeService.getAllEmployee(req.body.createdBy);
    // let employeeData = [];
    // data.forEach(data => {
    //     let employeeDetails = {
    //         id: data.id,
    //         emp_name: data.emp_name,
    //         emp_email: data.emp_email,
    //         emp_dob: data.emp_dob,
    //         emp_phone: data.emp_phone,
    //         emp_address: data.emp_address,
    //         emp_city: data.emp_city,
    //         emp_joining_date: data.emp_joining_date,
    //         createdBy: data.createdBy
    //     }
    //     console.log(employeeDetails);
    //     employeeData.push(employeeDetails);
    // });
    let result = data.map(
        ({ error_status, message, status_code, ...rest }) => {
          return rest;
        }
      );
    if (data[0]["error_status"] == 0) {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"],
            data: result
        })
    } else {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"]
        })
    }
}

/**
 * Controller to get employee
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateEmplpoyee = async (req, res, next) => {
    const data = await EmployeeService.updateEmplpoyee(req.params.id, req.body)
    let employeeDetails = {
        id: data[0]["id"],
        emp_name: data[0]["emp_name"],
        emp_email: data[0]["emp_email"],
        emp_dob: data[0]["emp_dob"],
        emp_phone: data[0]["emp_phone"],
        emp_address: data[0]["emp_address"],
        emp_city: data[0]["emp_city"],
        emp_joining_date: data[0]["emp_joining_date"],
        createdBy: data[0]["createdBy"]
    }
    if (data[0]["error_status"] == 0) {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"],
            data: employeeDetails
        })
    } else {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"]
        })
    }
}

/**
 * Controller to get employee
 * @param {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteEmployee = async (req, res, next) => {
    const data = await EmployeeService.deleteEmployee(req.params.id, req.body.createdBy);
    if (data[0]["error_status"] == 0) {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"],
        })
    } else {
        res.status(data[0]["statusCode"]).json({
            code: data[0]["statusCode"],
            success: data[0]["error_status"],
            message: data[0]["message"]
        })
    }
}