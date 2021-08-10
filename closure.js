

let myUser=()=> {

    let name ="Pam";

    //function printUser has access to any variable defined within this scope
    function printUser(){
        console.log(name);
    }
    return printUser;
}

let user =myUser();
user();

//Accessing Private methods with Closure
var counter = function (){

    //variable counter and fucnction ChangeBy both are private
    var counter=0;
    function changeBy(val){
        counter += val;
    }
    return {
        //public functions

        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value: function(){
            return counter;
        }

    }
};
var counter1 = counter();
console.log(counter1.value());  // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value());  // 2.

counter1.decrement();
console.log(counter1.value());  // 1.

//closures save outer variables in heap to access them 

//Closure in loop:

//when we use var in loop the output is 3,3,3
//Reason is var get hoisted to global scope
//Since value is not saved when timeout is complete the loop has iterated till 3 and hence prints 3, three times.

for (var i=0;i<3;i++){

    //depends on variable defined outisde its scope hence its a closure
    const log = () => {
        console.log(i);
    }

    setTimeout(log,100);

}


//let is block scoped. It is local to for loop and cannot be accessed outside it 
//incase of let, closure is capturing the log function along with the var i for each iteration of loop
//variable is stored in heap so it can be refernced again when closure is called when timeout is complete
for (let i=0;i<3;i++){

    //depends on variable defined outisde its scope hence its a closure
    const log = () => {
        console.log(i);
    }

    setTimeout(log,100);

}