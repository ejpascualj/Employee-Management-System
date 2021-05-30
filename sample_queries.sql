-- View all employees
SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name, role.salary, IFNULL(CONCAT(m.first_name, " ", m.last_name), NULL) AS Manager
FROM employee
LEFT JOIN employee m
ON employee.manager_id = m.employee_id
LEFT JOIN role
ON employee.role_id = role.role_id
LEFT JOIN department
ON role.department_id = department.department_id;

-- CREATE DEPARTMENT
INSERT INTO department (name)
VALUES (?);

-- CREATE ROLE
INSERT INTO role (title, salary, department_id)
VALUES (?, ?, ?);

-- CREATE EMPLOYEES
INSERT INTO employee (first_name, last_name, role_id)
VALUES (?, ?, ?);

-- DELETE DEPARTMENT
DELETE FROM department WHERE name = ?;

-- DELETE ROLES
DELETE FROM roles WHERE role = ?;

-- DELETE EMPLOYEES
DELETE FROM employees WHERE (first_name = ? OR last_name = ? OR CONCAT(first_name, " " last_name) = ? OR employee_id = ?)

-- UPDATE EMPLOYEE ROLES
UPDATE employees
SET role_id = ?
WHERE employee_id = ?