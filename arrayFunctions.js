/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
  // Your code here
  if (numbers.length %2 === 1){
    return true;
  }
  else{
    return false;
  }
  //return numbers
}

//console.log(isArrayLengthOdd(numbers));
console.log(isArrayLengthOdd([1, 2, 3 ])); //true
console.log(isArrayLengthOdd([1, 2, 3, 4])); //false

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  // Your code here
  //console.log(numbers);
  //console.log(length);
  if (numbers.length % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}
//console.log(isArrayLengthEven(numbers));
console.log(isArrayLengthEven([1, 2, 3])); 
console.log(isArrayLengthEven([1, 2, 3, 4])); 
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
let instructors = ["Mshary", "Hasan"];
let arr2 = ["Laila"];

function addLailaToArray(instructors) {
  // Your code here
 let newArr = instructors.concat(arr2);
  return newArr;
}
console.log(instructors);
console.log(addLailaToArray(instructors));
// or(other solution) return [ ... instructors, "Laila"]
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
//let teams = ["Brazil", "Germany", "Italy"];
 
function eliminateTeam(teams) {
  // Your code here
  return teams.pop();
}

console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
let fruits = ["apple", "orange","banana","kiwi","blueberry"];

function secondHalfOfArrayIfItIsEven(fruits) {
  // Your code here
 let length = fruits.length;

 if (length %2 == 0){
  return fruits.slice(length / 2);
 }
 else {
  return [];
 }

}
console.log(fruits);
console.log(secondHalfOfArrayIfItIsEven(fruits));
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */

function youGottaCalmDown(shout) {
  // Your code here
  if(shout.includes("!")){
    const index = shout.indexOf ("!");
    return shout.slice(0, index + 1);
   }
  return shout;
}

console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
console.log(youGottaCalmDown("Hellooooo"));

