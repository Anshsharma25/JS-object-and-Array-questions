/*Write a function validateObject that takes an object and a validation function. 
It should return true if all key-value pairs pass the validation.*/

function validateObject(inputObject,validateObject){
    // let a = {}
    for(let key in validateObject){
        if (validateObject[key]  != inputObject[key]) {
            return false
        }
        // a = a + validateObject
    }
    return true
}
// Sample Input:
const inputObject = {
  age: 25,
  name: 'John',
  score: 90
};
const validationFunction = (key, value) => key.length > 2 && value >= 0;
console.log(validateObject(inputObject,validateObject));

// Expected Output:
// true