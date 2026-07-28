function countOccurrences(arr: number[]): void {
    let count: { [key: number]: number } = {};
    for (let num of arr) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }
    console.log(count);
}

countOccurrences([1, 2, 2, 3, 1, 4, 2]);