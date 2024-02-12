/* 유럽 기준 달력
유럽국가의 달력은 월요일부터 시작합니다(월요일-1, 화요일-2, … 일요일-7). 
‘유럽’ 기준 숫자를 반환해주는 함수 getLocalDay(date)를 만들어보세요.

let date = new Date(2019, 11, 5);  // 2019년 11월 5일
alert( getLocalDay(date) );       // 금요일이므로, 5가 출력되어야 함
*/ 
// 내 풀이
function getLocalDay(date){
    let day = [1, 2, 3, 4, 5, 6, 7];
    return day[date.getDay()];
}

let date = new Date(2019, 11, 5);  // 2019년 11월 5일
console.log( getLocalDay(date) );       // 금요일이므로, 5가 출력되어야 함

// 해답 코드
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // 일요일(숫자 0)은 유럽에선 7입니다.
        day = 7;
    }

    return day;
}