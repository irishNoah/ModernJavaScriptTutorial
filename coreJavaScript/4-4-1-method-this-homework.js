/***** 객체 리터럴에서 'this' 사용하기 *****/
function makeUser() {
    return {
      name: "John",
      ref(){
        return this;
      }
    };
  };
  
let user = makeUser();

console.log( user.ref().name ); // 결과가 어떻게 될까요?


/***** 계산기 *****/
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('첫 번째 값:', 0);
      this.b = +prompt('두 번째 값:', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

/***** 체이닝 *****/
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        alert( this.step );
    }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.up().up().down().showStep(); // 1