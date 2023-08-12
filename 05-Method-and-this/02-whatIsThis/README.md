ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // * "Joe" เพราะ ตอนใช้ฟังก์ชันเพื่อสร้าง object ใช้บน window this จึงหมายถึง window ไปแล้ว
```