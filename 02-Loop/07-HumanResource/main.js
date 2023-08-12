const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};
let name = prompt("Enter employee name");
const emName = employees[name];
if (employees[name] == undefined || name === null) alert("Not Found");
else
  alert(
    `Name: ${name}, salary: ${emName["salary"]}, address: ${emName["address"]["district"]}, ${emName["address"]["province"]}`
  );
