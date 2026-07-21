class College {
    static collegeName = "SVECW";
    readonly rollNo: number;
    constructor(rollNo: number) {
        this.rollNo = rollNo;
    }
    display() {
        console.log("Roll No:", this.rollNo);
        console.log("College:", College.collegeName);
    }
}
let s = new College(101);
s.display();