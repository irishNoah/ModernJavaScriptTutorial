/* 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다. */

// 예시
let calculatorSample = new CalculatorSample();
CalculatorSample.read();

alert( "Sum=" + CalculatorSample.sum() );
alert( "Mul=" + CalculatorSample.mul() );

// 정답
function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  alert( "Sum=" + calculator.sum() );
  alert( "Mul=" + calculator.mul() );