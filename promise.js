let addFunc = async (num1, num2) => {
    return new Promise((resolve, reject) => {
        let result = num1 + num2
        if (result) {
            resolve(result)
        } else {
            reject('Failed to add the two numbers entered')
        }
    })
}


//Chaining Promises
const calculator = () => {
    addFunc(1, 1).then((result) => {
        console.log(`Answer is ${result}`);
        return addFunc(result, 5);
    }).then((result) => {
        console.log(`Answer is ${result}`);
        return addFunc(result, 2);
    }).then((finalResult) => {
        console.log(`Result is ${finalResult}`);
    })
        .catch((message) => {
            console.log(message)
        })



}
calculator();

//Using async to make the code neater and more readable 
const myCalculator = async () => {
    try {
        const result = await addFunc(1, 1);
        console.log(`Answer is ${result}`);
        const secResult = await addFunc(result, 5);
        console.log(`Answer is ${secResult}`);
        const finalResult = await addFunc(secResult, 2);
        console.log(`Result is ${finalResult}`);
    }
    catch (error) {
        alert(error);
    }

}
myCalculator();


//using Promise.all and Promise.Race fuction
const fetchCountry = async (alpha3Code) => {
    try {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
      );
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchCountryAndNeigbors = async () => {
    const columbia = await fetchCountry("col");
  
    //to handle list of promises. promise.all is used
    //promise will resolve when all of the input's promises have resolved
    //promise.all is rejected if any of the elements are rejected
    //Just for the sake of testing, i ran Promise.race and brazil was returned. as this fucntion returns when any one 
    //of the promisses in the array fulfills or rejects
    const neighbors = await Promise.all(
      columbia.borders.map((border) => fetchCountry(border))
    );
  
    console.log(neighbors);
  };
  
  fetchCountryAndNeigbors();
  