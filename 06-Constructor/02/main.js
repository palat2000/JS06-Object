function Accumulator (startingValue) {
    this.currentValue = startingValue;
    this.read = function () {
        this.currentValue += +prompt("Enter num");
    };
    this.show = function () {
        alert(this.currentValue);
    }
}
const accumulator = new Accumulator(299);
console.log(accumulator);