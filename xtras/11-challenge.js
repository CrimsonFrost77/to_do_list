document.getElementById("min-max-button").addEventListener("click", findMinMax);
document
  .getElementById("word-counter-button")
  .addEventListener("click", countWords);

//function to find min-max among the given numbers
function findMinMax() {
  const inputNumbersString = document.getElementById("numbers").value;
  // console.log(inputNumbersString);
  // console.log(inputNumbersString.split(" "));

  //split the input string into array of numbers
  const inputNumbers = inputNumbersString.split(" ").map(Number);
  // console.log(inputNumbers);

  let min = inputNumbers[0];
  let max = inputNumbers[0];
  for (let i = 1; i < inputNumbers.length; i++) {
    if (inputNumbers[i] < min) {
      min = inputNumbers[i];
    } else if (inputNumbers[i] > max) {
      max = inputNumbers[i];
    }
  }

  // console.log(min, max);
  document.getElementById(
    "min-max-result"
  ).innerText = `Min: ${min}, Max: ${max}`;
}

//counts appearance of each word in the given string
function countWords() {
  const inputString = document.getElementById("words").value;
  const words = inputString.split(",").map((word) => word.trim());

  const wordCount = {};

  for (let i = 0; i < words.length; i++) {
    if (wordCount[words[i]]) {
      wordCount[words[i]]++;
    } else {
      wordCount[words[i]] = 1;
    }
  }

  outputPlace = document.getElementById("word-counter-result");

  for (const word in wordCount) {
    outputPlace.innerHTML += `<p>${word}: ${wordCount[word]}</p>`;
  }
}
