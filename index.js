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
    runSearch();
});

const runSearch = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do',
        choices:[
            'View all Employees',
            'View All Employees by Department',
            'View All Employees by Manager',
            'Add Employee',
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
            case 'View All Employees by Department':
                ViewEmpByDept();
                break;
            case 'View All Employees by Manager':
                ViewEmpByMgr();
                break;
            case 'Add Employee':
                AddEmployee();
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

const ViewAllEmployees = () => {
    connection.query(queries.viewAllEmployees, (err, res) => {
        if (err) throw err;
        console.table(res);
        connection.end();
    })
}
