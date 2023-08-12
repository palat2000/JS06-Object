const dev1 = {
    name: "John",
    age: 32,
    role: "dev",
    salary: 40_000,
    dev () {
        console.log("I'm develop some features");
    },
};

//Object Creators == Constructor Function

function Developer (name,age) {
    this.name = name;
    this.age = age
    this.role = "dev";
    this.salary = 40_000;
    this.dev = function () {
        console.log("I'm develop some features");
    };
};

const dev2 = new Developer('Pond',22);
console.log(dev2);