let name = prompt("Enter product name");
let quantity = +prompt("Enter quantity");
let price = +prompt("Enter price");
let discount = +prompt("Discount (%)") / 100;
const product = {
  name,
  quantity,
  price,
};
if (discount !== 0) {
    product.discount = discount;
//   product.totalPrice =
//     product.quantity * (product.price - product.price * product.discount);
}
// console.log(product);

function calcPrice (productObj) {
    let price = productObj.price;
    let quantity = productObj.quantity;
    let discount = productObj.discount ? productObj.discount : 0;
    return price * quantity * (1-discount);
}

alert(calcPrice(product))