/* Question 1 > new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요? */
function A() { /* 내용 */ }
function B() { /* 내용 */ }

let a = new A;
let b = new B;

console.log( a == b ); // false

/* Answer 1 > 두 함수 모두 this 대신에 객체를 반환하게 하면 됩니다. */
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true