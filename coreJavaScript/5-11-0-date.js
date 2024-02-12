/* 객체 생성하기 */
let now = new Date();
console.log( now ); // 현재 날짜 및 시간이 출력됨 -> 2024-02-01T14:23:07.438Z

/* getFullYear() vs getYear() */
console.log( now.getFullYear() ); // 2024
// getYear() - 비지원 메소드
console.log( now.getYear() ); // 124 -> 이런 이유로 getYear()은 사용하면 안됨

/* Date.now() */
let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초

// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done
// Date 객체가 아닌 숫자끼리 차감함
console.log( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` ); // 반복문을 모두 도는데 6 밀리초가 걸렸습니다.

/* Date.parse와 문자열 */
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (타임스탬프)