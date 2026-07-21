class Student {
    name: string;
    age: number;
    constructor(name: string = "Nithya", age: number = 20) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let s1 = new Student();
let s2 = new Student("Devi", 19);
s1.display();
s2.display();