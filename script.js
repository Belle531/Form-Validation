document.getElementById("js-form").addEventListener("submit", function (event) {
  const usernameInput = document.getElementById("js-username").value;
  const usernameError = document.getElementById("usernameError");

  if (usernameInput.length < 5) {
      usernameError.textContent = "Username must be at least 5 characters long!";
      event.preventDefault(); // Prevent form submission
  } else {
      usernameError.textContent = ""; // Clear any previous error message
  }
});

console.log("Script started...");