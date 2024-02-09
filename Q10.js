// Write a function recursiveUpdate that takes an object and a callback function.
//  It should update all numeric values in the object by applying the callback.
function recursiveUpdate(inputObject, callback) {
    for (const key in inputObject) {
        if (typeof inputObject[key] === "object"){
            recursiveUpdate(inputObject[key],callback)
            // console.log("hey this is ansh")
        }else if(typeof inputObject[key] ===  "number"){
            inputObject[key] = callback(inputObject[key])
            // console.log("hey this is me ")
        }
    }
    return inputObject;
}
// Sample Input:
const inputObject = {
  a: 5,
  b: {
    c: 8,
    d: 12
  }
};
const callback = (value) => value * 2;
console.log(recursiveUpdate(inputObject,callback))

// Expected Output:
// { a: 10, b: { c: 16, d: 24 } }