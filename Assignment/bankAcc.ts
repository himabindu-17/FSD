class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        this.balance -= amount;
    }
    displayBalance(): void {
        console.log("Balance:", this.balance);
    }
}

let acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
acc.displayBalance();