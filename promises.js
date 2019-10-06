

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

const getEmployee = (id) => {
    return new Promise( (resolve, reject) => {
        const employeeBD = employees.find(employee => employee.id === id);

        if (!employeeBD) {
            reject(`Employee with ID ${id} doesn't exist`);
        } else {
            resolve(employeeBD);
        }
    });
};


getEmployee(5).then(employee => {
    console.log(employee);
}).catch(error => console.log(error));