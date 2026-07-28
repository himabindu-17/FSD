class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    public showDetails() {
        console.log("Name:", this.name);
    }
}
class Manager extends Employee {
    displayDepartment() {
        console.log("Department:", this.department);
    }
}
let emp = new Manager("Ritu", 50000, "IT");
emp.showDetails();
emp.displayDepartment();
