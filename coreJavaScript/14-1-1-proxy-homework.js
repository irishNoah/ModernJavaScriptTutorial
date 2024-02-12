/* 과제 1번 :  존재하지 않는 프로퍼티를 읽으려고 할 때 에러 던지기
존재하지 않는 프로퍼티 값을 읽으려고 하면 보통은 undefined가 반환됩니다.
undefined 대신 에러를 던지는 프락시를 만들어봅시다.
이렇게 해 놓으면 프로그래밍 중에 저지르는 실수를 미연에 방지할 수 있을 겁니다.
객체 target을 받는 함수 wrap(target)를 만들고 위에서 언급한 기능을 구현하여 
함수 wrap(target)이 프락시를 반환하도록 해보세요.
함수는 아래와 같이 동작해야 합니다.

let user = {
    name: "John"
};
  
function wrap(target) {
    return new Proxy(target, {
        // 여기에 코드를 작성하세요. 
    });
}
  
user = wrap(user);

console.log(user.name); // John
console.log(user.age); // ReferenceError: Property doesn't exist "age"
*/

/* 내 해답 >>> 하드 코딩적인 느낌 */
let user = {
    name: "John"
};
  
function wrap(target) {
    return new Proxy(target, {
        get(tar, prop){
            if (prop in tar){
                return tar[prop];
            }
            else return `ReferenceError: Property doesn't exist "${prop}"`
        }
    });
}
  
user = wrap(user);

console.log(user.name); // John
console.log(user.check); // ReferenceError: Property doesn't exist "check"

/* 정답 > throw 활용 */
let answer = {
    name: "PCY"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
        if (prop in target) {
            return Reflect.get(target, prop, receiver);
        } else {
            throw new ReferenceError(`Property doesn't exist: "${prop}"`);
        }
        }
    });
}

answer = wrap(answer);

console.log(answer.name); // John
console.log(answer.age); // ReferenceError: Property doesn't exist "age"