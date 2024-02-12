let user = {
    name: "Violet",
    age: 30
  };
  
  // 값을 순회합니다.
  for (let value of Object.values(user)) {
    console.log(value); // Violet과 30이 연속적으로 출력됨
  }