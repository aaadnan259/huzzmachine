
document.getElementById("convertButton").addEventListener("click", function () {
  const word = document.getElementById("inputWord").value.trim();
  const buzzLingoOutput = document.getElementById("buzzLingoOutput");

  // Validate the input (letters only, no empty strings)
  if (!/^[a-zA-Z]+$/.test(word)) {
    buzzLingoOutput.textContent = "Please enter a valid word!";
    return;
  }

  // Transform the word into Buzz Lingo
  const buzzWord = transformToBuzzLingo(word);

  // Display the result
  buzzLingoOutput.textContent = buzzWord;
});

function transformToBuzzLingo(word) {
  // Rule: Convert the first letter of the word + "uzz"
  return word.charAt(0).toUpperCase() + "uzz";
}
