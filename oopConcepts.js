function User(email, name ){
    this.email=email;
    this.name=name;
    this.online=false;
}

User.prototype.login=function(){
    this.online=true;
    console.log(this.email+ "has logged in ");
}

//Prototype Inheritence
function Admin(...args){
    User.apply(this,args)
    this.role="super admin"
}

//For admin to get access to login fucntion
Admin.prototype = Object.create(User.prototype);

//Accessible only to Admin not User
Admin.prototype.deleteUser = function(userToDelete){
    users = users.filter(user => {
        return user.email != userToDelete.email;
    });
};


let userOne = new User("abc@gmail.com","Micheal");
let userTwo = new User("def@gmail.com","Dwight");
let admin =new Admin("admin@gmail.com","jan");
//cannot call prototype on instances of objects only on objects themselves

var users = [userOne,userTwo,admin];
admin.deleteUser(userOne);
console.log(users);