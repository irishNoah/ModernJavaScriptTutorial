/* 
애너그램(어구전철)은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이입니다.

예시:

nap - pan
ear - are - era
cheaters - hectares - teachers
애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보세요.

예시:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
*/

// 정답 1
function aclean1(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬한 다음에 다시 합칩니다.
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean1(arr1) ); // [ 'PAN', 'hectares', 'era' ]

//////////////////////////////////////////////////////////////////

// 정답 2
function aclean2(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }

    return Object.values(obj);
}

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean2(arr2) ); // [ 'PAN', 'hectares', 'era' ]