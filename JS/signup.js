var inputName = document.getElementById("signupName");
var inputEmailsignUp = document.getElementById("signupEmail");
var inputPwSignUp = document.getElementById("signupPassword");

var signUpList = [];
if (localStorage.getItem("users") != null) {
  signUpList = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  if (
    inputName.value == "" ||
    inputEmailsignUp.value == "" ||
    inputPwSignUp.value == ""
  ) {
    document.querySelector(".spanErr").classList.remove("d-none");
  } else {
    document.querySelector(".spanErr").classList.add("d-none");
    var signUpInfo = {
      name: inputName.value,
      email: inputEmailsignUp.value,
      password: inputPwSignUp.value,
    };
    if (signUpList.length == 0) {
      signUpList.push(signUpInfo);
      localStorage.setItem("users", JSON.stringify(signUpList));
      document.querySelector(".spanscc").classList.remove("d-none");
      return true;
    }

    if (isExist() == false) {
      document.querySelector(".spanexist").classList.remove("d-none");
      document.querySelector(".spanscc").classList.add("d-none");
    } else {
      signUpList.push(signUpInfo);
      localStorage.setItem("users", JSON.stringify(signUpList));
      document.querySelector(".spanscc").classList.remove("d-none");

      document.querySelector(".spanexist").classList.add("d-none");
      var myint = setInterval(function () {
        window.location = "./index.html";
      }, 1000);
    }
  }
}

function isExist() {
  for (var i = 0; i < signUpList.length; i++) {
    if (
      signUpList[i].email.toLowerCase() == inputEmailsignUp.value.toLowerCase()
    ) {
      return false;
    }
  }
}
