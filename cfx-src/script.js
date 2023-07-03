function embedWebsite() {
  var textBox = document.getElementById("textBox");
  var inputValue = textBox.value;
  var url = "https://servers-frontend.fivem.net/api/servers/single/";
  var lastSixCharacters = inputValue.slice(-6);
  var finalUrl = url + lastSixCharacters;
  var embeddedWebsite = document.getElementById("embeddedWebsite");
  embeddedWebsite.src = finalUrl;
  embeddedWebsite.style.display = "block";

  // Store the value in local storage
  localStorage.setItem("lastInputValue", inputValue);

  // Extract and display the text from the embedded website
  embeddedWebsite.onload = extractText; // Call extractText() when the embedded website is loaded
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    embedWebsite();
  }
}

// Retrieve the last input value from local storage on page load
window.onload = function() {
  var lastInputValue = localStorage.getItem("lastInputValue");
  if (lastInputValue) {
    var textBox = document.getElementById("textBox");
    textBox.value = lastInputValue;
  }
};


