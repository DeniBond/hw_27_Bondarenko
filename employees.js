// Working with employees
class Employees {
    constructor() {
        this.data = {};
    }

    add = (employee) => {
        if (this.data[employee.id]) {
            // throw new Error('Error adding User, Id not unique')
            console.log('Error adding User, Id not unique')
        } else {
            this.data[employee.id] = employee;
            return true;
        }
    }
    getId = (id) => {
        if (this.data[id]) {
            return this.data[id];
        } else {
            throw new Error('Id not found');
        }
    }
    getAll = () => {
        return Object.values(this.data);
    }

    remove = (id) => {
        if (this.data[id]) {
            delete this.data[id]
            return true
        } else {
            throw new Error('Employee not found');
            return false
        }
    }
}
