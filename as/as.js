var userInputArray = []; 
// Initialize an empty array to store user input
    
function storeText() {
  var userInput = document.getElementById('userInput').value;
  userInputArray.push(userInput); // Add user input to the array
  document.getElementById('userInput').value = ''; // Clear the input field
}

function displayText() {
  var textList = document.getElementById('textList');
  textList.innerHTML = ''; // Clear the previous list

  for (var i = 0; i < userInputArray.length; i++) {
    var listItem = document.createElement('div');
    listItem.textContent = userInputArray[i];
    textList.appendChild(listItem);
  }
}
   
