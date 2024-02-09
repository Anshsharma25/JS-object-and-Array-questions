/*Question 2: Object Summation
  Write a function sumObject that takes an object
   with numeric values and returns the sum of all the values.
*/

// console.log(object)
function sumObject(object) {
    let sum = 0
    for (let key in object) {
        sum = sum + object[key]
    }
    return sum;
}
const object = {
    a: 10,
    b: 5,
    c: 8
}
console.log(sumObject(object))