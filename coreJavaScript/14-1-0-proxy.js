/* basic proxy */
let target = {};
let proxy = new Proxy(target, {}); // 빈 핸들러

proxy.test = 5; // 프락시에 값을 씁니다. -- (1)
console.log(target.test); // 5, target에 새로운 프로퍼티가 생겼네요!
console.log(proxy.test); // 5, 프락시를 사용해 값을 읽을 수도 있습니다. -- (2)

proxy.pcy = "My name is PCY";

console.log(proxy); // { test: 5, pcy: 'My name is PCY' }
for(let key in proxy) console.log(key); // test, pcy >>> 반복도 잘 동작합니다. -- (3)


// =========================================================
/* get 트랩으로 프로퍼티 기본값 설정하기 */
/* 
프로퍼티 읽기를 가로채려면 handler에 get(target, property, receiver) 메서드가 있어야 합니다.

get메서드는 프로퍼티를 읽으려고 할 때 작동합니다. 인수는 다음과 같습니다.

1) target – 동작을 전달할 객체로 new Proxy의 첫 번째 인자입니다.
2) property – 프로퍼티 이름
3) receiver – 타깃 프로퍼티가 getter라면 receiver는 getter가 호출될 때 this 입니다. 
대개는 proxy 객체 자신이 this가 됩니다. 프락시 객체를 상속받은 객체가 있다면 해당 객체가 this가 되기도 하죠. 
지금 당장은 이 인수가 필요 없으므로 더 자세한 내용은 나중에 다루도록 하겠습니다.
*/
let numbers = [1, 3, 5];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0; // 기본값
    }
  }
});

console.log(numbers)            // [ 1, 3, 5 ]
console.log( numbers[1] );      // 3
console.log( numbers[123] );    // 0 (해당하는 요소가 배열에 없으므로 0이 반환됨)

// 변수에 키가 있는 것은 값을 반환, 없는 것은 키를 반환
let words = {
    'company' : 'ABC',
    'name' : 'PCY',
    'age' : 25
};

words = new Proxy(words, {
    get(target, prop){
        if (prop in target) return target[prop];
        
        else return prop;
    }
});

console.log(words);             // { company: 'ABC', name: 'PCY', age: 25 }
console.log(words['name']);     // PCY  >>> proxy에 있으므로 값을 반환
console.log(words['live']);     // live >>> proxy에 없으므로 키워드를 반환

// =========================================================
/* set 트랩으로 프로퍼티 값 검증하기 */
/* 
set(target, property, value, receiver):

1) target – 동작을 전달할 객체로 new Proxy의 첫 번째 인자입니다.
2) property – 프로퍼티 이름
3) value – 프로퍼티 값
4) receiver – get 트랩과 유사하게 동작하는 객체로, setter 프로퍼티에만 관여합니다.

구현해야 할 set 트랩은 숫자형 값을 설정하려 할 때만 true를, 
그렇지 않은 경우엔(TypeError가 트리거되고) false를 반환

set 트랩을 사용해 배열에 추가하려는 값이 숫자형인지 검증
*/
let nums  = [];

nums = new Proxy(nums, {
    set(target, prop, val){ // 프로퍼티에 값을 쓰는 동작을 가로챕니다.
        if (typeof val == 'number'){ 
            target[prop] = val;
            return true;    // 반드시 set트랩 사용시 true를 반환해야 한다!
        }
        else {
            return false;
        }
    }
});

nums.push(3);
nums.push(-5);
nums.push(1);
nums.push(7);
nums.push(-8);
console.log("Length is: " + nums.length); // Length is: 5
nums.push('hello'); // TypeError: 'set' on proxy: trap returned falsish for property '5'


// nums와 numsMig는 서로 push한 값을 공유함...
let numsMig = nums;
console.log(numsMig);

nums.push(100);
console.log("nums = " + nums);
console.log("numsMig = " + numsMig);

numsMig.push(200);
console.log("nums = " + nums);
console.log("numsMig = " + numsMig);