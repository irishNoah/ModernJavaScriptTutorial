let student = {
name: 'John',
age: 30,
isAdmin: false,
courses: ['html', 'css', 'js'],
wife: null
};

let json = JSON.stringify(student);

console.log(typeof json); // 문자열이네요!

console.log(json);
/* JSON으로 인코딩된 객체:
{
"name": "John",
"age": 30,
"isAdmin": false,
"courses": ["html", "css", "js"],
"wife": null
}
*/

// ------------------------------------------------------------
/* JSON.parse */
// 문자열로 변환된 배열
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[1] ); // 1