function secondLargest(arr: number[]): number {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

let arr = [10, 5, 20, 8, 15];
console.log(secondLargest(arr)); // 15