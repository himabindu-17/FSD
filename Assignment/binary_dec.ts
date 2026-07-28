let binary = "1010";
console.log(parseInt(binary, 2)); // 10


function binaryToDecimal(binary: string): number {
    let decimal = 0;
    let power = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += Number(binary[i]) * (2 ** power);
        power++;
    }
    return decimal;
}

console.log(binaryToDecimal("1010")); // 10