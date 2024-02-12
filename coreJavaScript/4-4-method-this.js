/*****  메서드 만들기 *****/
let pcy = {
    age : 30,
    city : "Gunpo"
};

console.log(pcy);       // { age: 30, city: 'Gunpo' }
console.log(pcy.age);   // 30
console.log(pcy.city);  // Gunpo


/*****  arrowFuction 사용해 메서드 만들기 *****/
pcy.sayHi = () => console.log("Hello World!");
pcy.sayHi();            // Hello World!

/*****  메서드와 this *****/
let person = {
    name : "hkd",
    age  : 30,
    sayHi(){
        console.log(this.name);
    }
};

person.sayHi();         // hkd

/*****  자유로운 this *****/
let pA = {name : 'You Jae Seok'};
let pB = {name : 'Kang Ho Dong'};

function voice(){
    console.log(this.name);
}

pA.fVoice = voice;
pB.fVoice = voice;

pA.fVoice();            // You Jae Seok
pB.fVoice();            // Kang Ho Dong