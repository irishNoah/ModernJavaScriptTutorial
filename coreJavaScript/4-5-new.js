function User(name){
    this.name = name;
    this.isAdmin = false;
}


let pOne = new User("창영");
console.log(pOne.name);     // 창영
console.log(pOne.isAdmin)   // false
console.log(pOne);          // User { name: '창영', isAdmin: false }

pOne.isAdmin = true;
console.log(pOne.isAdmin);  // true
