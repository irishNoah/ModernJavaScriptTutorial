let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // 인덱스 1부터 요소 한 개를 제거

console.log( arr ); // ["I", "JavaScript"]

// ****************************************************

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체합니다.
arr2.splice(0, 3, "Let's", "dance");

console.log( arr2 ) // now ["Let's", "dance", "right", "now"]

// ****************************************************

let arr3 = ["t", "e", "s", "t"];

console.log( arr3.slice(1, 3) ); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))

console.log( arr3.slice(-2) ); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

// ****************************************************

let arr4 = [1, 2];

// arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
console.log( arr4.concat([3, 4]) ); // 1,2,3,4

// arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
console.log( arr4.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
console.log( arr4.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// ****************************************************
// for each element call console.log
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);

/* 출력 결과
[ 1, 2, 3, 4, 5, 6 ]
Bilbo 0 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
Gandalf 1 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
Nazgul 2 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
*/

// ****************************************************
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

// ****************************************************
// 정렬1
let arr6 = [ 1, 2, 15 ];

arr6.sort(function(a, b) { return a - b; });

console.log(arr6);  // 1, 2, 15

// 정렬2[정렬1과 동일하지만, 화살표 함수를 사용]
let arr7 = [ 1, 5, 35 ];

arr7.sort( (a, b) => a - b );

console.log(arr7);  // 1, 5, 35

// ****************************************************
let arr8 = [1, 2, 3, 4, 5];
arr8.reverse();

console.log( arr8 ); // 5,4,3,2,1