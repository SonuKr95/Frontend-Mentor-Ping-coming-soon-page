// Created a variable for email address, error message and submit button

const emailByuser = document.getElementById("email");

const userbutton = document.getElementById("btn");

const errormessage = document.getElementById("message");

// Created regular expression to validate and test the email
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// attached event listener to submit button and validate the value of user inout email with the regular expression

userbutton.addEventListener("click", function () {
  if (re.test(emailByuser.value)) {
  } else {
    errormessage.classList.toggle("show");
  }
});
