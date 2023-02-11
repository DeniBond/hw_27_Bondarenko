class Company {
    constructor(employees) {
        this.employees = employees;
    }
    hire = (employee) =>{
        return this.employees.add(employee) === true;
    }
    fire = (id) =>{
        return this.employees.remove(id) === true;
    }

    computeBudget = () =>{
        let salarySum = 0;
        Object.values(this.employees.data).forEach(emp =>{
            salarySum += emp.salary
        })
        console.log(salarySum)
    }

    processEmployees(func){
        Object.values(this.employees.data).forEach(emp =>{
            func(emp)
        })
    }
}