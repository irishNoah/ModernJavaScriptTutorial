let num1 = +prompt("수를 입력하세요");       // 13 입력
alert(typeof num1);                         // number

let num2 = prompt("수를 입력하세요"); // 123 입력
alert(typeof num2); // string

let num3 = +prompt("수를 입력하세요"); // 14 입력
alert(typeof num3); // number

alert(num1 + num3); // 27 출력
alert(num1 + num2); // "13123" 출력

// ===============================================

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}