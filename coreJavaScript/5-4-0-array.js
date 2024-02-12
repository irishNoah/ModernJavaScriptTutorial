/* 배열 요소의 자료형엔 제약이 없음 */
// 요소에 여러 가지 자료형이 섞여 있습니다.
let arr = [ '사과', { name: '이보라' }, true, function checkHello() { console.log('안녕하세요.'); } ];

// 인덱스가 1인 요소(객체)의 name 프로퍼티를 출력합니다.
console.log( arr[1].name ); // 이보라

// 인덱스가 3인 요소(함수)를 실행합니다.
arr[3](); // 안녕하세요.

console.log(arr[3]); // [Function (anonymous)]

/* 배열 - push / pop / shift / unshift */
let fruits1 = ["사과", "오렌지", "배"];

console.log( fruits1.shift() ); // 배열에서 "사과"를 제거하고 제거된 요소를 얼럿창에 띄웁니다.

console.log( fruits1 ); // 오렌지,배

let fruits2 = ["오렌지", "배"];

fruits2.unshift('사과');

console.log( fruits2 ); // 사과,오렌지,배