
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

const getEmployee = async(id) => {
    const employeeBD = employees.find(employee => employee.id === id);

    if (!employeeBD) {
        throw new Error(`Employee with ID ${id} doesn't exist`);
    } else {
        return employeeBD;
    }
};

const getSalary = async(employee) => {
    const salaryBD = salaries.find(salary => salary.id === employee.id);

    if (!salaryBD) {
        throw new Error(`Salary not found for employee with id ${employee.id}`);
    } else {
        return {
            name: employee.name,
            salary: salaryBD.salary,
            id: employee.id
        };
    }
};


const getEmployeeInfo = async(id) => {
    const employee = await getEmployee(id);
    const salary = await getSalary(employee);
    return `Employee ${employee.name} has a salary ${salary.salary}`;
}

getEmployeeInfo(2).then(console.log).catch(console.log);
