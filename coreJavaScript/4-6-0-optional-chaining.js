let user = {};                          // 주소 정보가 없는 사용자

console.log( user?.address?.street );   // undefined, 에러가 발생하지 않습니다.

/* ?.은 ?. ‘앞’ 평가 대상에만 동작되고, 확장은 되지 않는다 */
let user1 = null;

console.log( user1?.address );          // undefined
console.log( user1?.address.street );   // undefined


/* user가 null이나 undefined가 아니고 실제 값이 존재하는 경우엔 반드시 user.address 프로퍼티는 있어야 합니다. 
그렇지 않으면 user?.address.street의 두 번째 점 연산자에서 에러가 발생 */
let user2 = "null";

console.log( user2?.address );              // undefined
// console.log( user2?.address.street );    // error
console.log( user2.address?.street );       // undefined