// variable annotation
let Name: string = "Himabindu";
let Age: number = 19;
let isEligible: boolean = true;

console.log("Name:", Name);
console.log("Age:", Age);
console.log("Eligible:", isEligible);




//function parameter annotation
function greet(name: string){
    console.log("Hello " + name + "!");
}
 
function Year(y: number){
    console.log("Year: "+y);
}
 
function Multiply(a:number,b:number){
    console.log("Answer: "+(a*b));
}

greet(Name);
Year(2026);
Multiply(10, 5);




//Array annotations
let students: string[] = ["Nithya", "Hasini", "Hima"];
let marks: number[] = [10,10,10];
let question: boolean[] = [true,false];

console.log("Students:", students);
console.log("Marks:", marks);
console.log("Question:", question);