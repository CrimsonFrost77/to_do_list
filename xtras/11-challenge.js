document.getElementById("min-max-button").addEventListener("click", findMinMax);
document
  .getElementById("word-counter-button")
  .addEventListener("click", countWords);

//function to find min-max among the given numbers
function findMinMax() {
  const inputString = document.getElementById("numbers").value;
  const trimmedInput = inputString.trim(); //for cases when there are spaces at the beginning or end of the input
  // console.log("Trimmed Input: " + trimmedInput);
  // console.log("Input String Length: " + inputString.length);
  // console.log("Trimmed Input Length: " + trimmedInput.length);

  if (!trimmedInput) {
    document.getElementById("min-max-result").innerText =
      "No numbers provided!";
    return;
  }
  const inputNumbers = trimmedInput.split(", ").map(Number);

  let min = inputNumbers[0];
  let max = inputNumbers[0];

  for (let i = 1; i < inputNumbers.length; i++) {
    if (inputNumbers[i] < min) {
      min = inputNumbers[i];
    } else if (inputNumbers[i] > max) {
      max = inputNumbers[i];
    }
  }

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
