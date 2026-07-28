//Parameter & Return Type
function welcome(name: string): string {
    return `Welcome, ${name}!`;
}
console.log(welcome("Himabindu"));

function Age(age: number):number{
    return age;
}

//Default Parameter
function country(place: string = "India"): string {
    return `Country: ${place}`;
}

//Optional Parameter
function student(name: string, age?: number): void {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    }
}

//Rest Parameter
function addNumbers(...numbers: number[]): number {
    let sum = 0;

    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

//Arrow Function
const cube = (num: number): number => num * num * num;




console.log(country());

console.log(country("Japan"));

student("Anjali");

student("Rahul", 20);

console.log("Sum:", addNumbers(10, 20, 30));

console.log("Cube:", cube(3));