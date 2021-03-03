/**
 * IN CLASS EXERCISE: LOOPS
 */
var myArray = [0,1,2,3,4,5]
var myObj = {
  first: 1,
  second: 2,
  third: 3

}
/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let a = 0; a <= array.length -1; a++) {
  console.log(array[a])
  }
  // YOUR CODE ABOVE HERE //
}
printArrayValues(myArray)







/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
for (let c = array.length -1; c >= 0; c--) {
  console.log(array[c])
}
  
  // YOUR CODE ABOVE HERE //
}
printArrayValuesInReverse(myArray)





/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
     let emptyArr = []
  for(var key in myObjectParam){
    emptyArr.push(key)
    }
    console.log(emptyArr)

  // YOUR CODE ABOVE HERE //
}
getObjectKeys(myObj)




/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) {
    console.log(key)
  }

  // YOUR CODE ABOVE HERE //
}
printObjectKeys(myObj)




/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {   
console.log(object[key])
  }
  // YOUR CODE ABOVE HERE //
}
printObjectvalues(myObj)






/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
for (var key in object ) {
  console.log(object[key])
  }
  
  // YOUR CODE ABOVE HERE //
}
printObjectValues(myObj)
