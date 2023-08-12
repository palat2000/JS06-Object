const obj = {
    name: "pond",
    age: 22,
    address: "bkk",
    country: "thailand",
    number: 1,
    stop: "stop",
    num: 2,
    no: 5,
}
const cloneObj = {};
for (let key in obj){
    if (key == "stop") break;
    cloneObj[key] = obj[key];
}

console.log(cloneObj);