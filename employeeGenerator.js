
class EmployeeGenerator {

    constructor(random) {
        this.random = random;
    }
    getRandomEmployee = () =>{
        return {
            id: this.random.getRandomNumber(1,200),
            name: '',
            email: '',
            gender: this.random.getRandomElement(["Male", "Female"]),
            salary: this.random.getRandomNumber(1, 50000),
            title: this.random.getRandomElement(["Wage Employee", "Manager", "Sales Person", "Sales Manager"])
        }
    }
}