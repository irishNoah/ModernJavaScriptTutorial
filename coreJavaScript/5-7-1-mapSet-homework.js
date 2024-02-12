/*
arr은 배열이라 가정합시다.

arr에서 중복 값을 제거해 주는 함수 unique(arr)를 만들어보세요.
*/
function unique(arr) {
    // /* 제출 답안 */
    // let valSet = new Set(arr)

    // return valSet; // Set(3) { 'Hare', 'Krishna', ':-O' }

    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.