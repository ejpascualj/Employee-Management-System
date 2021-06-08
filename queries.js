const viewAllEmployees = 'SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name, role.salary, IFNULL(CONCAT(m.first_name, " ", m.last_name), NULL) AS Manager FROM employee LEFT JOIN employee m ON employee.manager_id = m.employee_id LEFT JOIN role ON employee.role_id = role.role_id LEFT JOIN department    ON role.department_id = department.department_id;';

const viewDepartment = 'SELECT * FROM department'

const viewRole = 'SELECT * FROM role'

const createDepartment = 'INSERT INTO department (name) VALUES (?);';

const createRole = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);';

const createEmployee = 'INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?);';

const updateEmployeeRole = 'UPDATE employee SET role_id = ? WHERE employee_id = ?;';

const updateEmployeeMgr = 'UPDATE employee SET manager_id = ? WHERE employee_id = ?;';

exports.viewAllEmployees = viewAllEmployees;
exports.viewDepartment = viewDepartment;
exports.viewRole = viewRole;
exports.createDepartment = createDepartment;
exports.createRole = createRole;
exports.createEmployee = createEmployee;
exports.updateEmployeeRole = updateEmployeeRole;
exports.updateEmployeeMgr = updateEmployeeMgr;