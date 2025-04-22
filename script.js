document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("jsForm");

  if (form) {
      form.addEventListener("submit", function (event) {
          const usernameInput = document.getElementById("js-username").value; // Correctly defined inside the event handler
          const usernameError = document.getElementById("usernameError");

          if (usernameInput.length < 5) {
              usernameError.textContent = "Username must be at least 5 characters long!";
              event.preventDefault();
          } else {
              usernameError.textContent = "";
          }

          console.log("Form submitted, username:", usernameInput); // Debugging output
      });
  } else {
      console.error("Form not found! Check the ID in your HTML.");
  }
});