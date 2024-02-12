let user = {
    name : "pcy"
};

console.log(user.name);         // pcy

/* 참조값 복사 */
let objectCopy = user;
console.log(objectCopy.name);   // pcy

/* 참조값 수정 */
objectCopy.name = "Irish"
console.log(objectCopy.name);   // Irish
console.log(user.name); ;       // Irish

/* 참조에 의한 비교 */
// 객체 비교에서 == 과 === 은 동일한 동작
let objA =  {};
let objB = objA;                // 참조에 의한 복사
console.log(objA == objB);      // true
console.log(objA === objB);     // true

let objC =  {};
let objD = {};                  // 독립된 두 객체
console.log(objC == objD);      // false
console.log(objC === objD);     // false

/* ********************************************* */

let userInfo = {
    name: "John",
    age: 30
};

let objClone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in userInfo) {
    objClone[key] = userInfo[key];
}

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
objClone.name = "Pete"; // clone의 데이터를 변경합니다.

// 기존 객체에는 여전히 John이 있습니다.
console.log( "userInfo.name = " + userInfo.name ); // userInfo.name = John
console.log( "objClone.name = " + objClone.name ); // objClone.name = Pete

/****************** Object.assign ******************/
// 형식 : Object.assign(dest, [src1, src2, src3...])
let userAssign = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(userAssign, permissions1, permissions2);

console.log( userAssign ); // { name: 'John', canView: true, canEdit: true }