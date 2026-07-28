class Student {
    readonly studentId: number;
    name: string;
    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }
    display(): void {
        console.log(this.studentId);
        console.log(this.name);
    }
}

let s = new Student(101, "Hima");
s.display();