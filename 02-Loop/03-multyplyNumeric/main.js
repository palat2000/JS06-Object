const multiplyNumeric = (obj, num) => {
  for (let key in obj) {
    if (isNaN(obj[key])) continue;
    obj[key] *= num;
  }
};
let menu = {
  title: "My menu",
  width: 200,
  height: 320,
  age:"twenty-two",
  weight:80,
};
multiplyNumeric(menu, 3);
console.log(menu);