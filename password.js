function checkPassword() {
    var password = document.getElementById("password").value;
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; // pattern for password validation
    
    if (password.match(pattern)) {
      alert("Password is valid.");
    } else {
      alert("Password is invalid.");
    }
  }