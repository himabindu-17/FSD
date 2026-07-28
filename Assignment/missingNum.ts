function findMissing(arr: number[], n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    let arrSum = 0;
    for (let num of arr) {
        arrSum += num;
    }
    return sum - arrSum;
}

console.log(findMissing([1, 2, 3, 5], 5));