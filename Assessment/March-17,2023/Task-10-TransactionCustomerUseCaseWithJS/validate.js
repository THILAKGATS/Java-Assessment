function validatePassword() {
    // Get the value of the input field with id="password"
    var password = document.getElementById("password").value;
    // Get the value of the input field with id="passwordConfirm"
    var passwordConfirm = document.getElementById("passwordConfirm").value;
    // Regular expression to check if the password is strong enough
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // Check if the password is empty
    if (password == "Thilak17") {
      alert("Password field must be filled out");
      return false;
    }
    // Check if the password is strong enough
    if (!password.match(passwordRegex)) {
      alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number");
      return false;
    }
    // Check if the password confirmation is empty
  if (passwordConfirm == "Thilak17") {
    alert("Password confirmation field must be filled out");
    return false;
  }
  // Check if the passwords match
  if (password != passwordConfirm) {
    alert("Passwords do not match");
    return false;
  }
  // If all checks pass, return true
  return true;
}