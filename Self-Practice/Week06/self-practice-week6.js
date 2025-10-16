///// 1.1 ตัวอย่าง First-Class Functions /////
// ฟังก์ชันสามารถเก็บในตัวแปรได้
const greet = function(name) {
    return `Hello, ${name}!`;
};

// เรียกใช้ฟังก์ชันผ่านตัวแปร
console.log(greet("Alice")); // Output: Hello, Alice!

// ฟังก์ชันสามารถส่งเป็นอาร์กิวเมนต์
function executeFunction(fn, value) {
    return fn(value);
}
console.log(executeFunction(greet, "Bob")); // Output: Hello, Bob!

// ฟังก์ชันสามารถคืนค่าฟังก์ชันอื่นได้
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

console.log("/////////////////////////////////////////////////////////////////////////////");

///// 1.2 ตัวอย่าง Higher-Order Functions /////
// Higher-Order Function: รับฟังก์ชันเป็นอาร์กิวเมนต์
function applyOperation(arr, operation) {
    return arr.map(operation);
}

// ฟังก์ชันที่ใช้เป็นอาร์กิวเมนต์
function square(num) {
    return num * num;
}
const numbers = [1, 2, 3, 4];
const squaredNumbers = applyOperation(numbers, square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

// Higher-Order Function: คืนค่าฟังก์ชัน
function createLogger(prefix) {
    return function(message) {
        console.log(`[${prefix}] ${message}`);
    };
}
const infoLogger = createLogger("INFO");
infoLogger("This is an informational message."); // Output: [INFO] This is an informational message.

console.log("/////////////////////////////////////////////////////////////////////////////");

//// 2.1 ตัวอย่าง Pure Function
function add(a, b) {
  return a + b; // ผลลัพธ์ขึ้นอยู่กับ input เท่านั้น
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (ผลลัพธ์เหมือนเดิม)

//// 2.2 ตัวอย่าง Impure Function
let x = 10;

function addToX(y) {
  x += y; // เปลี่ยนแปลงค่า x ซึ่งเป็นตัวแปรภายนอก
  return x;
}

console.log(addToX(5)); // 15
console.log(addToX(5)); // 20 (ผลลัพธ์เปลี่ยนไป)

console.log("/////////////////////////////////////////////////////////////////////////////");

///// 3.1 Function Composition /////
// compose รับฟังก์ชันหลายตัวและส่งฟังก์ชันใหม่
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// ฟังก์ชันตัวอย่าง
const add2 = x => x + 2;
const multiply3 = x => x * 3;
const subtract1 = x => x - 1;

// นำ compose มาใช้งาน
const composed = compose(subtract1, multiply3, add2);

console.log(composed(5)); // ผลลัพธ์: subtract1(multiply3(add2(5))) => ((5+2)*3)-1 = 20

console.log("/////////////////////////////////////////////////////////////////////////////");

///// 4.1 Closure /////
function greeting(message) {
    return function(name) {
        console.log(message + ', ' + name);
    }
}

const sayHello = greeting('Hello');
sayHello('John'); // Output: Hello, John
sayHello('Jane'); // Output: Hello, Jane