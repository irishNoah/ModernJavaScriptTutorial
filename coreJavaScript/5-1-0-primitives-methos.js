/* 프로퍼티 : name / sayHi */
let pcy = {
    name: "pcy",
    sayHi: function() {
      console.log("PCY야 반갑다!");
    }
};
  
pcy.sayHi(); // 친구야 반갑다!

// --------------------------------------

let str = "Nice to Meet You";
/* 출력 후 str 객체가 해제되어 str의 원시값만 존재 */
console.log( str.toLowerCase() ); // nice to meet you

let n = 1.23456;
/* 출력 후 n 객체가 해제되어 n 원시값만 존재 */
console.log( n.toFixed(2) ); // 1.23