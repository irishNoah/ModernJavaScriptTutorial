try {
    console.log('try 블록 시작');  // (1) <--
  
    lalala; // 에러, 변수가 정의되지 않음!
  
    console.log('try 블록 끝(절대 도달하지 않음)');  // (2)
  
} catch(err) {
    console.log(`에러가 발생했습니다!`); // (3) <--
}

// ==========================================================

let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  console.log( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  console.log( "데이터에 에러가 있어 재요청을 시도합니다." );
  console.log( e.name );
  console.log( e.message );
}

// ==========================================================
/* throw */
let json2 = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json2); // <-- 에러 없음

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }

  console.log( user.name );

} catch(e) {
  console.log( "JSON Error: " + e.message ); // JSON Error: 불완전한 데이터: 이름 없음
}

// ==========================================================
/* try... catch... finally */
let num = 35;

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("음수나 정수가 아닌 값은 처리할 수 없습니다.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

console.log(result || "에러 발생");

console.log( `연산 시간: ${diff}ms` );