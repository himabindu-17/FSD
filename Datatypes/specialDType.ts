//any
let value: any;

value = 100;
console.log(value);

value = "Hello";
console.log(value);

value = true;
console.log(value);


//unknown
let v: unknown = "TypeScript";
if (typeof v === "string") {
    console.log(value.toUpperCase());
}

let num: unknown = 25;
if (typeof num === "number") {
    console.log(num * 2);
}


//void
function greet(): void {
    console.log("Welcome to TypeScript");
}
greet();

function add(a: number, b: number): void {
    console.log("Sum =", a + b);
}
add(10, 20);