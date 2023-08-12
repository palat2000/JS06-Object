const calculator = {
    read () {
        this.num1 = +prompt("Enter number 1");
        this.num2 = +prompt("Enter number 2");
    },
    sum () {
        return this.num1 + this.num2;
    },
    mul () {
        return this.num1 * this.num2;
    }
}