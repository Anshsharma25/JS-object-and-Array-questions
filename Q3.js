/*Write a function flattenObject that takes a nested object and returns a 
flat object with keys as concatenation of nested keys.
// Sample Input:*/

// Expected Output:
// { 'a.b.c': 3, 'a.b.d': 7, 'a.e': 5 }
function flattenObject(inputObject){
    let result = {}
    for(let i in inputObject){
        if ((typeof inputObject[i]) === 'object'  ) {
            const temp = flattenObject(inputObject[i]);
            for (const j in temp) {
                result[i + '_' + j] = temp[j];
                
            }
        }else {
            // console.log("helloo ansh")
            result[i] = inputObject[i];
        }
        return result
    }
}
const inputObject = {
    a: {
      b: {
        c: 3,
        d: 7
      },
      e: 5
    }
  };
console.log(flattenObject(inputObject))