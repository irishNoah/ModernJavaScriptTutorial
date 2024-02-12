/* 
Map - 맵(Map)은 키가 있는 데이터를 저장한다는 점에서 객체와 유사합니다. 
다만, 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있습니다. 
*/
let map = new Map();

map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키

// 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
// 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3

///////////////////////////////////////////////////////////////////////////
/* Object.entries: 객체를 맵으로 바꾸기 */
let obj = {
    name: "John",
    age: 30
  };
  
let map2 = new Map(Object.entries(obj));

console.log( map2.get('name') ); // John

///////////////////////////////////////////////////////////////////////////
/* 셋[Set] */
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}