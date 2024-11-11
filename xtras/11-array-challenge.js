let ingredients = ["egg", "apple", "egg", "banana", "egg", "egg", "egg", "egg"];

//function takes an array of strings and
//returns an array after removing the first 2 instances
//of the word 'egg'
function removeFirst2Egg(array) {
  let eggCount = 0;
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "egg" && eggCount < 2) {
      eggCount++;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

//function to remove last 2 instances of egg
function removeLast2Egg(array) {
  let arrayCopy = array.slice();
  let eggCount = 0;
  arrayCopy.reverse();
  let newArray = [];
  for (let i = 0; i < arrayCopy.length; i++) {
    if (arrayCopy[i] === "egg" && eggCount < 2) {
      eggCount++;
    } else {
      newArray.push(arrayCopy[i]);
    }
  }
  return newArray.reverse();
}

// console.log(ingredients);

// console.log(removeFirst2Egg(ingredients));
//["apple", "banana", "egg", "egg", "egg", "egg"]

// console.log(removeLast2Egg(ingredients));
//["egg", "apple", "egg", "banana", "egg", "egg"]

// console.log(ingredients);

//FizzBuzz Problem
//Write a program that prints the numbers from 1 to given number.
//But for multiples of three print “Fizz” instead of the
// number and for the multiples of five print “Buzz”.
//For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz(upto) {
  for (let i = 1; i <= upto; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz();

//function to find the first occurrence of a word in a array
//takes in array to search and word to search for
function findFirstOccurrence(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

console.log(ingredients);
console.log(findFirstOccurrence(ingredients, "ham")); // -1
console.log(findFirstOccurrence(ingredients, "banana")); // 3
console.log(findFirstOccurrence(ingredients, "egg")); // 0
