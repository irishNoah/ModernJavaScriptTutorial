/* str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. */

function ucFirst(str){
    let newName = str[0].toUpperCase() + str.slice(1);
    //console.log(newName);
    return newName;
}

//let name = "john";

console.log(ucFirst("john") == "John");