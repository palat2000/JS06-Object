const fruitsBasket = {};
let key;
let value;
const putFriutsToBasket = () => {
  do {
    key = prompt("Enter fruit");
    value = prompt("Enter Quantity");
    if (+value > 1) {
      fruitsBasket[key + "s"] = value;
    } else if (+value == 1) {
      fruitsBasket[key] = value;
    }
  } while (key != "stop" && value != "stop");
};
putFriutsToBasket();
console.log(fruitsBasket);