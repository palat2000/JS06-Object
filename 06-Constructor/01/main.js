function Calculator() {
  this.read = function () {
    this.num1 = +prompt("num1");
    this.num2 = +prompt("num2");
  };
  this.sum = function () {
    return this.num1 + this.num2;
  };
  this.mul = function () {
    return this.num1 * this.num2;
  };
}
const calculator = new Calculator();
console.log(calculator);
