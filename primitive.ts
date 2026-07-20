//string
let Name: string = "Himabindu";
console.log("User Name: " + Name);
console.log("Data Type: " + typeof Name);
console.log("Length of string: " + Name.length);
console.log("Uppercase: " + Name.toUpperCase());

function greet(name:string):
void{
    console.log(`Hello,${name}!`);
}
greet(Name);



//number
let a: number = 20;
let b: number =15;
console.log("Datatype: "+ typeof a);
console.log("Addition: "+ (a+b));
console.log("Average: "+ (a+b)/2);

let pi: number = 3.14;
console.log("Area of circle: "+ pi*a*a);

function largest(a:number, b:number):number{
    if (a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log("Largest: "+ largest(a,b));



//boolean
let age:number = 19;
let isEligible: boolean = age>=18;
console.log("Eligible or not? ",isEligible);

function isGreater(a:number,b:number):boolean{
    return a>b;
}
console.log(isGreater(2,5));  //false
console.log(isGreater(7,5));  //true