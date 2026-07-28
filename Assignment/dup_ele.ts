function findDuplicates(arr: number[]): void {
    let seen: number[] = [];
    let duplicates: number[] = [];
    for (let num of arr) {
        if (seen.includes(num)) {
            if (!duplicates.includes(num)) {
                duplicates.push(num);
            }
        } else {
            seen.push(num);
        }
    }
    console.log(duplicates);
}

findDuplicates([1, 2, 3, 2, 4, 5, 1, 6]);