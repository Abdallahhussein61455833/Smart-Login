var inputEmail = document.getElementById("signinEmail");
var inputPw = document.getElementById("signinPassword");
var signUpList = [];
if (localStorage.getItem("users") != null) {
  signUpList = JSON.parse(localStorage.getItem("users"));
}

function logIn() {
  if (inputEmail.value == "" || inputPw.value == "") {
    document.querySelector(".spanErr").classList.remove("d-none");
  } else {
    document.querySelector(".spanErr").classList.add("d-none");

    for (var i = 0; i < signUpList.length; i++) {
      if (
        signUpList[i].email == inputEmail.value &&
        signUpList[i].password == inputPw.value
      ) {
        localStorage.setItem("sessionUsername", signUpList[i].name);
        window.location = "./home.html";
      } else {
        document.querySelector(".Incorrect").classList.remove("d-none");
      }
    }
  }
}
