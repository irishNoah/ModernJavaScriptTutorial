/* 실행 후 N ms초 뒤에 함수 실행 */
function sayHi() {
    console.log('안녕하세요.');
}

function sayPcy(){
    console.log('내 이름은 PCY 입니다.');
}

let timerId1 = setTimeout(sayPcy, 500); // console.log('내 이름은 PCY 입니다.');
let timerId2 = setTimeout(sayHi, 1000); // 안녕하세요.

/* 인자를 받아서 실행 후 N ms초 뒤에 함수 실행 */
function manyArgs(A, B){
    console.log(A + "시의 온도는 " + B + "도입니다." );
}

// 방법 A, B 모두 결과 = 서울시의 온도는 23도입니다.
// 되도록 문자열 사용시, 방법 A보다 방법 B를 사용할 것
let timerId3 = setTimeout(manyArgs, 1500, "서울", 23); // 방법 A
let timerId4 = setTimeout(() => manyArgs("서울", 23), 2000); // 방법 B

// ---------------------------------------------------------

/* setInterval 과 clearInterval */
// 2초 간격으로 메시지를 보여줌
let timerId5 = setInterval(() => console.log('째깍'), 2000);

// 5초 후에 정지
setTimeout(() => { clearInterval(timerId5); console.log('정지'); }, 5000);