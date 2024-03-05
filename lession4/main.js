/**
 * hiểu hơn diều kiện
 *
 * và phép so sánh
 *
 */

var a = 1;
var b = 2;
var result = a < b && a > 0;
console.log(result);
if (a < b) {
  console.log("a < b");
} else {
  console.log(" a > b");
}

var hello = "A" && "b" && "c";
var hello2 = "A" && NaN && "c";
var hello2 = "A" || "b" || "c";
console.log(hello); // output = c
console.log(hello2); // output = NaN
/**
 * 0
 * null
 * undefined
 * NaN
 * false
 *
 *
 */

//  ================================ tạo chuỗi ================================

/**
 * các cách tạo chỗi
 */

var fullName = "hello";

var fullName2 = new String("Trọng Liêm");
console.log(fullName2); // output = Trọng Liêm"
console.log(typeof fullName2); // output = object

var name = "Ngo trong liem 'dep trai'"; //\'\'  search 'backslash in javascript'
console.log(name);
console.log(name.length); // output

let hii = `1234123412341234`;
console.log(`${hii}`);
/**
 * làm việc với chuỗi
 * search: javascript string methods
 * 1: length
 * 2: find index
 * 3: cut string
 * 4: replace
 * 5: convert to string uppercase
 * 6: convert to string lowercase
 * 7: trim
 * 8: split
 * 9: get a charater by index
 *
 */

var myString = "     Ngô TRọng Liêm   ";
console.log(myString.length); // output = 14

console.log(myString.indexOf("TR")); // output = 4 nếu = -1 là không tìm thấy
console.log(myString.lastIndexOf("TR")); // output = 4 nếu = -1 là không tìm thấy
console.log(myString.search("TR")); // output = 4 nếu = -1 là không tìm thấy

console.log(myString.slice(4));
console.log(myString.slice(4, 6));
console.log(myString.slice(-3, -1));

console.log(myString.replace("TR", "gh")); // output :Ngô ghọng Liêm

console.log(myString.toLowerCase());
console.log(myString.toUpperCase());

console.log(myString.trim());

var language = "js , java , php , node";

console.log(language.split(", "));

var f = "javascript";
console.log(f.split(""));

const myStringName = "Trọng Liêm";
console.log(myStringName.charAt(4)); // lấy vị trí
