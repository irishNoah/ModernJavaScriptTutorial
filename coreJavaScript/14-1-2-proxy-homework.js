/* 음수 인덱스를 사용해 배열 요소에 접근하기

몇몇 프로그래밍 언어는 음수 인덱스를 사용해 배열 끝을 기준으로 요소에 접근할 수 있게 해줍니다.

아래와 같이 말이죠.

let array = [1, 2, 3];
array[-1]; // 3, 마지막 요소
array[-2]; // 2, 뒤에서 두 번째 요소
array[-3]; // 1, 뒤에서 세 번째 요소

위 예시에서 array[-N]는 array[array.length - N]와 동일합니다.
이렇게 음수 인덱스를 사용해 배열 요소에 접근할 수 있도록 해주는 프락시를 만들어봅시다.

최종 결과는 아래 조건을 만족해야 합니다.

let array = [1, 2, 3];

array = new Proxy(array, {
  // 여기에 코드를 작성하세요.
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

// 배열 기능은 "변함없이 그대로" 동작해야 합니다.
*/

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      // arr[1] 같은 형태로 배열 요소에 접근하는 경우에도
      // prop은 문자열이기 때문에 숫자로 바꿔줘야 합니다.
      prop = +prop + target.length;
    }
    return Reflect.get(target, prop, receiver);
  }
});


console.log(array[-1]); // 3
console.log(array[-2]); // 2