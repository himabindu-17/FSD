function countFrequency(str: string): void {
    let freq: { [key: string]: number } = {};
    for (let ch of str) {
        if (freq[ch]) {
            freq[ch] = freq[ch] + 1;
        } else {
            freq[ch] = 1;
        }
    }
    console.log(freq);
}

countFrequency("apple");