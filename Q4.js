/*Write a function rotateObject that rotates the keys of an object by 90 degrees clockwise.
  // Sample Input:*/
  function rotateObject(obj) {
    let Key = [];
    for (let key of Object.keys(obj)) {
        Key.push(key);
    }
    let rotatedObj = {};
    for (let i = 0; i < Key.length; i++) {
      rotatedObj[Key[i]] = obj[Object.keys(obj)[i]];
    }
    return rotatedObj;
  }
  const inputObject = {
    a: 1,
    b: 2,
    c: 3
  };
  console.log(rotateObject(inputObject));
  
 

