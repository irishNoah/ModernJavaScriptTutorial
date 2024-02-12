/* var는 블록 스코프가 없음 */
if (true) { //
    var test1 = true; // 'let' 대신 'var'를 사용했습니다.
}

console.log(test1); // true(if 문이 끝났어도 변수에 여전히 접근할 수 있음)

if (true) {
let test2 = true; // 'let'으로 변수를 선언함
}

console.log(test2); // Error: test is not defined

// -----------------------------------------------------
function sayHi() {
    var phrase; // 선언은 함수 시작 시 처리됩니다.
  
    console.log(phrase); // undefined
  
    phrase = "Hello"; // 할당은 실행 흐름이 해당 코드에 도달했을 때 처리됩니다.
}
  
sayHi();