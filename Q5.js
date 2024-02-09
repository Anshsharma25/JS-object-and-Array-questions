// Write a function intersectObjects that takes two objects and returns a new 
// object containing only common key-value pairs.

// Sample Input:


// Expected Output:
// { b: 7 }

function intersectObjects(object1,object2){
    let com = {}
    for(let key in object1){
        if (key in object2 && object1[key] == object2[key])
        com[key] = object1[key] 
    }
    return com
}
const object1 = { a: 3, b: 7, c: 12 };
const object2 = { b: 7, c: 8, d: 5 };

console.log(intersectObjects(object1,object2))
