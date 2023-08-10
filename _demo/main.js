// const user = {
//   name: "pond", // <--- property
//   age: 22,
//   address: "bkk",
//   isAdmin: false,
// };
// console.log(user);
const employee = {
  fullName : "pond pond",
  salary : 500_000,
  address : {
    district : "Phaya thai",
    province : "bkk",
    country : "thailand",
  }
}
// ? เช็คว่าข้างหน้าเป็น object ไหม
// ถ้ามีก็เข้าไปต่อ ถ้าไม่มีจะคืน undefined แต่ไม่ error
console.log(employee)