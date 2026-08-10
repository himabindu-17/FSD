namespace StudentResult {

    export function grade(marks: number): string {
        if (marks >= 90) return "A";
        if (marks >= 75) return "B";
        if (marks >= 60) return "C";
        return "D";
    }

    export function passed(marks: number): boolean {
        return marks >= 40;
    }
}

let marks = 82;

console.log("Grade:", StudentResult.grade(marks));
console.log("Passed:", StudentResult.passed(marks));