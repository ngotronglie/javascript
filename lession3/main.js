/**
 * toan tu  ++ --
 *
 * Prefix & Postfix - tien to va hau to
 */

var a = 6;
a++;
// viec 1: + 1 cho a , a =a + 1 => a =7
// viec 2: tra ve a sau khi a duoc + 1
// viec 3: tra e
console.log(a);
var b = 6;
++b;
console.log(b);

/**
 * toan tu gan  = , += , -= , *=, /=, **=
 */

a += 1;
console.log(a);

// ============================= toan tu chuoi =============================

var fistName = "Liem";
var lastName = "Trong";
console.log(fistName + " " + lastName); // output=Liem Trong

var name = "Liem";
name = name + " Trong";
console.log(name);
// ============================= toan tu so sanh =============================
var a = 1;
var b = 2;
if (a > b) {
  console.log("a > b");
} else {
  console.log("a < b");
}
/**
 * ==
 * ===
 * !=
 * >
 * <
 * >=
 * <=
 */

// ============================= boolean =============================

var isSuccess = true;
console.log(isSuccess);

var sosanh = a > b;
console.log(sosanh);

// ============================= if - else =============================

if (!isSuccess) {
  console.log("issuccess dung");
} else {
  console.log("isSuccess sai");
}

// ========================== toan tu logic =========================

/**
 * && - and
 * || - or
 * ! - not
 */

if (4 > 3 || 5 < 7) {
  console.log("hihi");
}

// =================================== kieeur duwx lieeuj    =======================================

/**
 * * 1 - du lieu nguyen thuy  - primitive data
 *  -number - string - boolean - undefined - null - symbol
 *  * 2 - du lieu phuc tap - complex data
 *      - function - object
 */

var id = Symbol("id");
var id2 = Symbol("id");
console.log(id === id2);

// var myFunc = function () {
//   alert("hi function");
// };
// myFunc();

var myObject = {
  name: "Liem",
  age: 18,
  adress: "Ha Noi",
};

console.log("myObject: ", myObject);

// array

var myArray = ["php", "js", "ruby"];

console.log(myArray);

// kiem tra kieu du lieu => typeof

console.log(typeof myObject);
console.log(typeof myArray);
// ============================= toan tu =============================
/**
 *
 * ===
 * !==
 */

var number1 = 1;
var number2 = "1";
console.log(number1 == number2); // output = true
console.log(number1 === number2); // output = false
console.log(number1 != number2); // output = false
console.log(number1 !== number2); // output = true
