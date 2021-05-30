const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table'); 
const queries = require('./queries');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'n7Lqd3uw5f3RTbV!',
    database: 'EMS_db',
});

connection.connect((err) => {
    if (err) throw err;
    initialize();
});

const initialize = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do',
        choices:[
            'View all Employees',
            'View all Roles',
            'View all Departments',
            'View All Employees by Department',
            'View All Employees by Manager',
            'Add Employee',
            'Add Department',
            'Add Role',
            'Remove Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'EXIT'
        ]
    })
    .then((answer) => {
        switch(answer.action) {
            case 'View all Employees':
                ViewAllEmployees();
                break;
            case 'View all Roles':
                ViewAllRoles();
                break;
            case 'View all Departments':
                ViewAllDepartments();
                break;
            case 'View All Employees by Department':
                ViewEmpByDept();
                break;
            case 'View All Employees by Manager':
                ViewEmpByMgr();
                break;
            case 'Add Employee':
                AddEmployee();
                break;
            case 'Add Department':
                AddDepartment();
                break;
            case 'Add Role':
                AddRole();
                break;
            case 'Remove Employee':
                RemoveEmployee()
                break;
            case 'Update Employee Role':
                UpdateEmpRole();
                break;
            case 'Update Employee Manager':
                UpdateEmpMgr();
                break;
            case 'EXIT':
                console.log('Good Bye!');
                connection.end();
                break;
            default:
                console.log(`Invalid action: ${answer.action}`);
                break;                         
        }
    })
};

const GoBack = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'Would you like to Go back to Main Menu or Exit the app?',
        choices:[
            'Go Back',
            'EXIT'
        ]
    })
    .then((answer) => {
        switch(answer.action) {
            case 'Go Back':
                initialize();
                break;
            case 'EXIT':
                console.log('Good Bye!');
                connection.end();
                break;
            default:
                console.log(`Invalid action: ${answer.action}`);
                break;                         
        }
    })
};

const ViewAllEmployees = () => {
    connection.query(queries.viewAllEmployees, (err, res) => {
        if (err) throw err;
        console.table(res);
        GoBack();
    })
};

const ViewAllRoles = () => {
    connection.query(queries.viewAllEmployees, (err, res) => {
        if (err) throw err;
        console.table(res);
        GoBack();
    })
};

const ViewAllDepartments = () => {
    connection.query(queries.viewAllEmployees, (err, res) => {
        if (err) throw err;
        console.table(res);
        GoBack();
    })
};

const AddEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Add new employees first name',
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Add new employees last name',
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Add new employees role id',
        },
    ])
    .then((answer) => {
        connection.query(queries.createEmployee, [answer.first_name, answer.last_name, answer.role_id], (err, res) =>{
            if (err) throw err;
            console.log('Employee Succesfully Added!');
            ViewAllEmployees();
        })
    })
};

const AddDepartment = () => {
    inquirer.prompt({
            name: 'department_name',
            type: 'input',
            message: 'Add new department name',
    })
    .then((answer) => {
        connection.query(queries.createDepartment, answer.department_name, (err, res) =>{
            if (err) throw err;
            console.log('New Department Succesfully Added!');
            ViewAllDepartments();
            GoBack();
        })
    })
};

const AddRole = () => {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Add role title'
        },
        {
            name: 'salary',
            type: 'number',
            message: 'Add role salary'
        },
        {
            name: 'department_id',
            type: 'number',
            message: 'Add new department id'
        }
    ])
    .then((answer) => {
        connection.query(queries.createRole, [answer.title, answer.salary, answer.department_id], (err, res) =>{
            if (err) throw err;
            console.log('Role Succesfully Added!');
            ViewAllRoles();
            GoBack();
        })
    })
};


