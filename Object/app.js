// // Object constructor

// let User = function(firstName,lastName,age) {
//     this.firstName = firstName,   // Thuộc tính
//     this.lastName = lastName,
//     this.age = age,
//     this.getName= function() {      // Phương thức
//         return `${firstName} ${lastName}`
//     }
// }


// let student = new User("Thế", "Anh", 18)
// let mentor = new User("Phạm", "Hiển", 32)
// User.prototype.school = "HUMG"  // thêm 1 thuộc tính
// User.prototype.getSchool = function() {  // thêm 1 phương thức
//     return this.school
// }
// student.class = "DCCTKT63A"
// mentor.subject = "OpenSourse"
// console.log(student.getSchool());
// console.log(mentor.school);

// // Đối tượng date
// let date = new Date(); // khởi tạo 1 đối tượng date, nếu không có từ khoá new thì sẽ trở thành string, k thể dùng các thuộc tính của date
 
// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let today = date.getDay() + 1;
// let day = date.getDate();
// let hours = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// console.log(`Hom nay la thu ${today} ngay ${day} thang ${month} nam ${year} `);

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

// // Math Object
// let bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
//     '60 coin',
//     '70 coin',

// ]
// console.log(Math.floor(Math.random() * bonus.length));
// console.log(bonus[Math.floor(Math.random() * bonus.length)]);


// Symbol 

//Biểu tượng(Symbol) được đảm bảo là duy nhất. Ngay cả khi chúng ta tạo nhiều biểu tượng với cùng một mô tả, chúng là các giá trị khác nhau. Mô tả chỉ là một nhãn hiệu không ảnh hưởng đến bất cứ điều gì.

let s1 = Symbol('Symbol1');
let s2 = Symbol('Symbol2');
console.log(s1.description); // => hiển thị mô tả
console.log(typeof toString(s1)); // => Convert Symbol to String
let user1 = {
    name: "john",
    age: 23,
    [s1]: 1
}
for (let i in user1) {
    console.log(i); // bỏ qua Symbol    
}
let id = Symbol('id')
user1[id] = 1;
console.log(user1[id]);
console.log();