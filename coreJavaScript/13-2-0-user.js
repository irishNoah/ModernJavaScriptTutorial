/* export default

모듈은 크게 두 종류로 나뉩니다.

1. 복수의 함수가 있는 라이브러리 형태의 모듈(위 예시의 say.js)
2. 개체 하나만 선언되어있는 모듈(아래의 user.js. class User 하나만 내보내기 함)

모듈은 export default라는 특별한 문법을 지원합니다. 
export default를 사용하면 '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나타낼 수 있습니다.
내보내고자 하는 개체 앞에 export default를 붙여봅시다.
*/
// 📁 user.js
export default class User { // export 옆에 'default'를 추가해보았습니다.
    constructor(name) {
      this.name = name;

      alert(`My Name is ${this.name}`);
    }
}