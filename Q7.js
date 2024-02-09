// Write a function deduplicateObject that removes duplicate values from an object.
function deduplicateObject(inputObject){
    const unique = {}
    let a = {}
    for(let key in inputObject){
        if(!(inputObject[key] in  unique)){
            unique[inputObject[key]]= true
            a[key] =  inputObject[key]
        }
    }return a 
}
// Sample Input:
const inputObject = {
  a: 5,
  b: 7,
  c: 5,
  d: 12,
  e: 7
};
console.log(deduplicateObject(inputObject))

// Expected Output:
// { a: 5, b: 7, d: 12 