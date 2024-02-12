/* Symbol.iterator */
let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
for (let num of range) {
console.log(num); // 1, then 2, 3, 4, 5
}

/////////////////////////////////////////////////
for (let char of "test") {
    // 글자 하나당 한 번 실행됩니다(4회 호출).
    console.log( char ); // t, e, s, t가 차례대로 출력됨
}