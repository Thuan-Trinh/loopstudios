
// 1. Variable: let, const, var

let greeting = 'Helo C4EJS148';
// const là khai báo biến không đổi, dấu '=' là phép gán - assignment
const PI = 3.14;
var studentName = 'Thuan';

console.log(greeting);
// khoogn được reassign các biến
// được khai báo bằng từ khóa const
// PI = 3.1412;

console.log('Số pi có giá trị là:', PI);
console.log('Tên tôi là:', studentName);


/*
2. Quy tắc đặt tên biến
    - Phải bắt đầu bằng chữ cái, dấu '_' hoặc dấu '$'
    - case-sensitive: có phân biệt in hoa với in thường:
            a khác với A; name kahsc với Name/NAME
    
    - không được sử dụng từ khóa đặc biệt của JS để đặt tên:
            let, const, var, delete, promise, class, new, ...
*/
// correct
const a = 10;
let $1a = 50;
let _isAuthenticated = true;

const name = 10;
const Name = 12;

// const Class = a; <---- không được đặt tên thế này


// 3. Cách đặt tên biến
//  - Camel case: evenNumbers  <--- thông dụng hơn
// - Snake case: even_numbers; should_allow_access_to_website

const evenNumber = [10, 20, 24];
const shouldAllowAccessToWebsite = true;
console.log(typeof shouldAllowAccessToWebsite);
// Không nên đặt tên biến bằng tiếng việt



// DATA TYPES
// number, string, boolean, null, underfined, function, Symbol, object, aray


// 1. Primitive datatypes (Kiểu dữ liệu nguyên thủy)
// number, string, boolean, null, underfined, symbol
let employee;
console.log(typeof employee);

employee = null;
console.log(typeof employee);


// 2. Reference Datatypes {Kiểu dữ liệu tham chiếu}
// function, aray, object



// 1. Bài tập 1
let myName = 'Trinh Van Thuan';
let x = 28;
let isStudent = false;

console.log(typeof myName);
console.log(typeof x);
console.log(typeof isStudent);

// 2. Bài tập 2
var u = 7;
var v = 3;

console.log(u + v);
console.log(u - v);
console.log(u*v);
console.log(u/v);
console.log(u%=v);





