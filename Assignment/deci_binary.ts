let num = 10;
console.log(num.toString(2)); // 1010


function decimalToBinary(num: number): string {
    let binary = "";
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}
console.log(decimalToBinary(10)); // 1010