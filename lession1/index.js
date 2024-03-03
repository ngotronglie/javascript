console.log("hello world!");

/**
 * TÓM TẮT BÀI HỌC: 
1. Đối tượng: 
- Chưa từng học Javascript
-  Đã học muốn ôn lại
-  Đã học, đã bỏ cuộc, muốn ôn lại

2. Lộ trình
- Giới thiệu + Lời nhắc
- Chuẩn bị công cụ
- Làm quen với ngôn ngữ, thư viện, framework..
- Khái niệm cơ bản, lý thuyết
- Thực hành project

3. Lời khuyên: 
- Các thuật ngữ tiếng anh
- Trình bày khi viết code
- Thực hành sau mỗi bài học
- Cố hiểu hơn cố nhớ
- Vạch rõ mục tiêu theo đuổi đến cùng..
 */

// ========================= cài đặt môi trường =========================
/**
 * - trình duyệt chorm
 * - vsCode
 */

// alert("hello world!");

// biến

var fullName = "Ngô Trọng Liêm";
var age = 20;
let a = 7;
const name = "Ngô Tr";

// alert(`${fullName} voi ${age}`);
// ========================= comment =========================
/**
 *  ghi chus nhieu dong
 */

// ghi chu 1 dong

// ========================= ham built-in =================================
/**
 * -1 alert
 * -2 console
 * -3 confirm
 * -4 prompt
 * -5 set timeout
 * -6 set interval
 */

// confirm("hello");
// alert("hello");
// prompt("hello");

// setInterval(function () {
//   console.log("hello");
// }, 1000);
// setTimeout(function () {
//   console.log("hello");
// }, 1000);

// ================================ toans tu =================================
/**
 * - 1 toan tu so hoc
 * - 2 toan tu gan
 * - 3 toan tu so sanh
 * - 4 toan tu logic
 */

var fullName = "NGo trong Lieem"; // day la toan tu gan

var a1 = 1;
var a2 = 2;

if (a1 >= a2) {
  // toan tu so sanh
  alert("khong dung ");
} else {
  alert("dung");
}

var a3 = 1;
var a4 = 2;

if (a3 > 0 && a4 > 0) {
  // toan tu logic
  alert("dung");
}
