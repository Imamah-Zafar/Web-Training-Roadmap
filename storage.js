class User{
    
    constructor(name, age){
        this.name=name;
        this.age=age
    }
}

person1 = new User("Jim",38);

//to store objects first stringify your objet and then later parse on retrieval
localStorage.setItem('person1', JSON.stringify(person1));
let temp = JSON.parse(localStorage.getItem('person1'));
console.log(temp);


sessionStorage.setItem('person1', JSON.stringify(person1));
let user1 = JSON.parse(sessionStorage.getItem('person1'));
console.log(user1);
sessionStorage.removeItem('person1');
