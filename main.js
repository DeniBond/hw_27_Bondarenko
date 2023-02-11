const employees = new Employees();
const company = new Company(employees)
const random = new Random();
const empGen = new EmployeeGenerator(random);
const list = new List('#content');

document.getElementById('create').addEventListener('click', ()=>{
    openButtons()
    try {
        let newEmp;
        for (let i = 0; i < 20; i++) {
            newEmp= empGen.getRandomEmployee()
            employees.add(newEmp)
             //Adding on screen
            list.addItem(`
            Id: ${newEmp.id} , Name: ${newEmp.name}, Email: ${newEmp.email},
             Gender: ${newEmp.gender}, Salary: ${newEmp.salary},
              Title: ${newEmp.title} 
            `)
        }
        console.log(employees.data)
    } catch (e) {
    //     Если честно не очень понял как реализовать ошибку через throw в данном случае
    //     После первой ошибки код вылетает.
    }
})
//  ComputeBudget()
document.getElementById('check_salary').addEventListener('click', company.computeBudget)
//  getAll()
document.getElementById('showCompany').addEventListener('click', ()=>{
    console.log(Object.values(employees.data));
})
// remove()
document.getElementById('fire').addEventListener('click', ()=>{
    const id = prompt('Please, input ID (only number)')
    try{
        if (employees.remove(+id) === true){
            console.log(`Employee ${id} deleted`)
          alert('OK')
        }
    } catch (e) {
        console.log(e)
    }
})
// Visibility buttons
openButtons = ()=>{
    document.querySelector('#showCompany').style.display = "inline"
    document.querySelector('#check_salary').style.display = "inline"
    document.querySelector('#fire').style.display = "inline"
    document.querySelector('h3').style.display = "block"
    document.querySelector('#getById').style.display = "block"
}
// GetById
document.getElementById('getById').addEventListener('click', ()=>{
    const id = prompt('Please, input ID (only number)')
    try{
        if (employees.getId(+id)){
            console.log(employees.getId(+id))
            alert('OK')
        }
    } catch (e) {
        console.log(e)
    }
})