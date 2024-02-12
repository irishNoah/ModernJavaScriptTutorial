/* 프로퍼티 값 더하기
급여 정보가 저장되어있는 객체 salaries가 있습니다.
Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.
salaries가 빈 객체라면, 0이 반환되어야 합니다.

=======================================================
예시:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650
*/
//=======================================================
// 내가 작성한 코드(정답)
function sumSalaries(salaries){
    let sumVal = 0;
    for (let value of Object.values(salaries)){
        sumVal += value;
    }
    return sumVal
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

console.log( sumSalaries(salaries) ); // 650

//=======================================================
// 해답 코드
// reduce는 급여 정보가 저장되어있는 배열을 순회해
// 급여의 총합을 만들고
// 그 결과를 반환합니다.
function sumSalaries2(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

console.log( sumSalaries2(salaries) ); // 650