// Write a function findObjectPath that takes an object and a value. 
// It should return the path to the value in dot notation.
// Write a function findObjectPath that takes an object and a value.
// It should return the path to the value in dot notation.

function findObjectPath(obj, value) {
    let path = [];
    function helper(obj, value, currentPath) {
      for (let key in obj) {
        if (obj[key] === value) {
          path.push(currentPath + key);
          return true;
        }
        if (typeof obj[key] === "object") {
          if (helper(obj[key], value, currentPath + key + ".")) {
            return true;
          }
        }
      }
      return false;
    }
    helper(obj, value, "");
    if (path.length > 0) {
      return path[0];
    }
    else {
      return null;
    }
  }
  // Sample Input:
  const obj = {
    a: {
      b: {
        c: 3,
        d: {
          e: 7
        }
      }
    },
    f: 12
  };
  const Value = 7;
  // Expected Output:
  // 'a.b.d.e'
console.log(findObjectPath(obj,Value))