const passwordInput = document.getElementById("passwordInput");
const eyeIcon = document.getElementById("eyeIcon");

const confirmpasswordInput = document.getElementById("confirmpasswordInput");
const eyeIcon2 = document.getElementById("eyeIcon2");

eyeIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.style.color = "var(--text-color2)";
  } else {
    passwordInput.type = "password";
    eyeIcon.style.color = "var(--bg-dark)";
  }
});

eyeIcon2.addEventListener("click", () => {
  if (confirmpasswordInput.type === "password") {
    confirmpasswordInput.type = "text";
    eyeIcon2.style.color = "var(--text-color2)";
  } else {
    confirmpasswordInput.type = "password";
    eyeIcon2.style.color = "var(--bg-dark)";
  }
});

// validation
const fullname = document.getElementById("fullname");
const fullnameErrMsg = document.getElementById("fullnameErrMsg");

const username = document.getElementById("username");
const usernameErrMsg = document.getElementById("usernameErrMsg");

const password = document.getElementById("passwordInput");
const passwordErrMsg = document.getElementById("passwordErrMsg");

const confirmPassword = document.getElementById("confirmpasswordInput");
const confirmpasswordErrMsg = document.getElementById("confirmpasswordErrMsg");

fullname.addEventListener("input", (event) => {
  if (event.target.value.length < 3) {
    fullnameErrMsg.textContent = "Minimum 3 characters are required";
  } else {
    fullnameErrMsg.textContent = "";
  }
});

username.addEventListener("input", (event) => {
  if (event.target.value.length < 3) {
    usernameErrMsg.textContent = "Minimum 3 characters are required";
  } else {
    usernameErrMsg.textContent = "";
  }
});

password.addEventListener("input", (event) => {
  const minLen = 6;
  const maxLen = 20;

  const hasLowercase = /[a-z]/;
  const hasUppercase = /[A-Z]/;
  const hasNumber = /[0-9]/;
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (
    event.target.value.length < minLen ||
    event.target.value.length > maxLen
  ) {
    passwordErrMsg.textContent = "password should be between 6-20";
  } else if (
    !hasLowercase.test(event.target.value) ||
    !hasUppercase.test(event.target.value) ||
    !hasNumber.test(event.target.value) ||
    !hasSpecialChar.test(event.target.value)
  ) {
    passwordErrMsg.textContent =
      "Include upper, lower, number, and special char";
  } else {
    passwordErrMsg.textContent = "";
  }
});

confirmPassword.addEventListener("input", (event) => {
  if (event.target.value != password.value) {
    confirmpasswordErrMsg.textContent = "password does not match";
  } else {
    confirmpasswordErrMsg.textContent = "";
  }
});

//server error msg

const serverErrorMsg = document.getElementById("serverErrorMsg");
const signupInputs = document.querySelectorAll(".signupForm input");

signupInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (serverErrorMsg) {
      serverErrorMsg.style.display = "none";
    }
  });
});