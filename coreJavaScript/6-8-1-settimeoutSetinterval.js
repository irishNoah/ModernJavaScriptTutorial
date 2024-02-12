/* 
일초 간격으로 숫자 출력하기

from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 
함수 printNumbers(from, to)를 만들어보세요. 
숫자는 일 초 간격으로 출력되어야 합니다.

두 가지 방법을 사용해 함수를 만드셔야 합니다.
1. setInterval을 이용한 방법
2. 중첩 setTimeout을 이용한 방법
*/

// 방법 1 [setInterval을 이용한 방법]
function printNumbers(from, to){
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
        clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(1, 6);




// ================================================

// 방법 2 [중첩 setTimeout을 이용한 방법]
function printNumbers2(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
}
  
  // usage:
  printNumbers2(5, 10);