// Generic Class
class Box<T>{
    value:T;
    constructor(value: T) {
        this.value = value;
    }
    display():void{
        console.log(this.value);
    }
}
let box1 = new Box<number>(100);
let box2 = new Box<string>("Hello");
box1.display();
box2.display();



// Generic Function
function display<T>(value:T):T{
    return value;
}
console.log(display<number>(10));
console.log(display<string>("Hello"));



// Generic Constraint
interface Person{
    name: string;
}
function printName<T extends Person>(obj:T):void{
    console.log(obj.name);
}
printName({name:"Hima"});