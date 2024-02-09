/*Write a function filterObject that takes an object and a callback function. 
It should return a new object containing only key-value pairs that satisfy the given callback condition.*/
function filterObject(InputObject,callback){
    let result ={}
    for( let key in InputObject){
        if (callback(InputObject[key])){
            result[key] = InputObject[key]
        }
    }
return result
}

