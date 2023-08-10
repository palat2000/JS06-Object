const isEmptyObject = (object) => {
    for (let i in object) {
        return false;
    }
    return true;
}
const aaa = {
    name:"pond",
}
console.log(isEmptyObject(aaa));