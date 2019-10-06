

const employees = [
    {
        id: 1,
        name: 'Dani'
    },
    {
        id: 2,
        name: 'Isabel'
    },
    {
        id: 3,
        name: 'Miguel'
    }
];

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 2000
    }
];


const getEmployee = (id, callback) => {
    const employeeBD = employees.find(employee => employee.id === id);

    if (!employeeBD) {
        callback(`Employee with ID ${id} doesn't exist`);
    } else {
        callback(null, employeeBD);
    }
};

const getSalary = (employee, callback) => {
    const salaryFinded = salaries.find(salary => salary.id === employee.id);

    if (!salaryFinded) {
        callback(`Salary not found for employee with id ${employee.id}`);
    } else {
        callback(null, {
            name: employee.name,
            salary: salaryFinded.salary,
            id: employee.id
        });
    }
};


getEmployee(2, (err, employee) => {
    if(err) { return console.log(err); }

    getSalary(employee, (err, salary) => {
        if(err) { return console.log(err); }
        console.log(salary);
    });
});






