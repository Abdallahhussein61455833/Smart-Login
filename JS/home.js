var inputEmail = document.getElementById("signinEmail");
var inputPw = document.getElementById("signinPassword");
var signUpList = [];
if (localStorage.getItem("users") != null) {
  signUpList = JSON.parse(localStorage.getItem("users"));
}

var username = localStorage.getItem("sessionUsername");
if (username) {
  document.getElementById("username").innerHTML = "Welcome " + username;
}

function logout() {
  localStorage.removeItem("sessionUsername");
  window.location = "./index.html";
}
