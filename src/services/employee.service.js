import sequelize, { DataTypes } from '../config/database';

//create new employees
export const addEmployee = async (body) => {
    const data = await sequelize.query('call sp_addemployees(:emp_name, :emp_email, :emp_dob, :emp_phone, :emp_address, :emp_city, :emp_joining_date, :createdBy);', {
        replacements: {
            emp_name: body.emp_name,
            emp_email: body.emp_email,
            emp_dob: body.emp_dob,
            emp_phone: body.emp_phone,
            emp_address: body.emp_address,
            emp_city: body.emp_city,
            emp_joining_date: body.emp_joining_date,
            createdBy: body.createdBy
        }
    });
    console.log("Response data-> ",data);
    return data;
};

//get employee by id
export const getEmployeeById = async (id, createdBy) => {
    const data = await sequelize.query('call sp_getEmployee(:id, :createdBy);', {
        replacements: {
            id: id,
            createdBy: createdBy
        }
    })
    console.log("Response data-> ", data);
    return data;
}

//get employee
export const getAllEmployee = async (createdBy) => {
    const data = await sequelize.query('call sp_getAllEmployee(:createdBy);', {
        replacements: {
            createdBy: createdBy
        }
    })
    // console.log("Response data-> ", data);
    return data;
}

//update employee
export const updateEmplpoyee = async (id, body) => {
    const data = await sequelize.query('call sp_updateEmployee(:id, :emp_name, :emp_email, :emp_dob, :emp_phone, :emp_address, :emp_city, :emp_joining_date, :createdBy);', {
        replacements: {
            id: id,
            emp_name: body.emp_name,
            emp_email: body.emp_email,
            emp_dob: body.emp_dob,
            emp_phone: body.emp_phone,
            emp_address: body.emp_address,
            emp_city: body.emp_city,
            emp_joining_date: body.emp_joining_date,
            createdBy: body.createdBy
        }
    })
    console.log("Response data-> ",data);
    return data;
}

//delete employee
export const deleteEmployee = async (id, createdBy) => {
    const data = await sequelize.query('call sp_deleteEmployee(:id, :createdBy);', {
        replacements: {
            id: id,
            createdBy: createdBy
        }
    })
    return data;
}