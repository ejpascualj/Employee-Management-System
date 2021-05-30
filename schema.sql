DROP DATABASE IF EXISTS EMS_db;
CREATE DATABASE EMS_db;
USE EMS_db;

CREATE TABLE department(
	department_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
	PRIMARY KEY (department_id)
);

CREATE TABLE role (
	role_id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(30),
	salary DECIMAL,
	department_id INT,
	PRIMARY KEY (role_id),
	FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee (
	employee_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INT,
     manager_id INT,
     PRIMARY KEY (employee_id),
     FOREIGN KEY (role_id) REFERENCES role(role_id),
     FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);