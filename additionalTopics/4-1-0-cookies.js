/* 쿠키 쓰기 */

// // 특수 값(공백)은 인코딩 처리해 줘야 합니다.
// let name = "my name";
// let value = "John Smith";
// let add = "AddValue";

// // 인코딩 처리를 해, 쿠키를 my%20name=John%20Smith 로 변경하였습니다.
// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + "&&&" + encodeURIComponent(add);

// alert( document.cookie ); // my%20name=John%20Smith&&&AddValue


// =============================================================

/* domain */
//// 서브 도메인에서도 메인 도메인에서 생성한 쿠키 정보 얻어오기

// document.cookie = "user=111; domain=127.0.0.1";

// alert(document.cookie);

// =============================================================
/* expires와 max-age */ 
//// 지금부터 하루 후인 Expire 지정
// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();
// document.cookie = "user=222; domain=127.0.0.1; expires=" + date;
// alert(document.cookie);

// max-age >>>  5초 지정
// 만료 기간을 5으로 지정하여 쿠키를 바로 삭제함
document.cookie = "user=333; max-age=1";
alert(document.cookie);
