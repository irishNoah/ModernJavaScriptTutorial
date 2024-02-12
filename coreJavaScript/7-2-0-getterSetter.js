/*  getter와 setter
이렇게 getter와 setter 메서드를 구현하면 
객체엔 fullName이라는 '가상’의 프로퍼티가 생깁니다. 
가상의 프로퍼티는 읽고 쓸 순 있지만 실제로는 존재하지 않습니다.
*/

let test = {
    first : "Park",
    name  : "ChangYeong",

    get fullName(){
        return `My name is ${this.first} ${this.name}`;
    },

    set fullName(value){
        [this.first, this.name] = value.split(" ");
    }
};

console.log(test.fullName);     // My name is Park ChangYeong

test.fullName = "Lee DaeHo";
console.log(test.first);        // Lee
console.log(test.name);         // DaeHo
console.log(test.fullName);     // My name is Lee DaeHo

// ============================================================

/* getter와 setter 똑똑하게 활용하기
user의 이름은 _name에 저장되고,
 프로퍼티에 접근하는 것은 getter와 setter를 통해 이뤄집니다.

기술적으론 외부 코드에서 user._name을 사용해 이름에 바로 접근할 수 있습니다. 
그러나 밑줄 "_" 로 시작하는 프로퍼티는 객체 내부에서만 활용하고, 외부에서는 건드리지 않는 것이 관습입니다.
*/
let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        console.log("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
        return;
      }
      this._name = value;
    }
};
  
user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // 너무 짧은 이름을 할당하려 함

// ============================================================
/* 호환성을 위해 사용하기

접근자 프로퍼티는 언제 어느 때나 getter와 setter를 사용해 
데이터 프로퍼티의 행동과 값을 원하는 대로 조정할 수 있게 해준다는 점에서 유용합니다.
데이터 프로퍼티 name과 age를 사용해서 사용자를 나타내는 객체를 구현한다고 가정해봅시다.

그런데 곧 요구사항이 바뀌어서 age 대신에 birthday를 저장해야 한다고 해보겠습니다. 

age보다는 birthday가 더 정확하고 편리하기 때문이죠.

이렇게 생성자 함수를 수정하면 기존 코드 중 프로퍼티 age를 사용하고 있는 코드도 수정해 줘야 합니다.

age가 사용되는 부분을 모두 찾아서 수정하는 것도 가능하지만, 시간이 오래 걸립니다. 
게다가 여러 사람이 age를 사용하고 있다면 모두 찾아 수정하는 것 자체가 힘들죠. 게다가 age는 user 안에 있어도 나쁠 것이 없는 프로퍼티이기도 합니다.

기존 코드들은 그대로 두도록 합시다.

대신 age를 위한 getter를 추가해서 문제를 해결해 봅시다.
*/
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age는 현재 날짜와 생일을 기준으로 계산됩니다.
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
}
  
let john = new User("John", new Date(1992, 5, 31));

console.log( john.birthday ); // birthday를 사용할 수 있습니다.
console.log( john.age );      // age 역시 사용할 수 있습니다.