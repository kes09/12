let formRegistration = document.getElementById("form-registration");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};
  let form = event.target;

  let name= document.getElementById("name").value;

  if (name == "") {
    errors.name = "სახელის ველი ცარიელია";
  }

  let surname = document.getElementById("surname").value;

  if(surname == ""){ 
    errors.surname = "გვარის ველი ცარიელია";
  }

  let password1 = document.getElementById("passw1").value;
  let password2 = document.getElementById("passw2").value;

  if (password1 == "") {
    errors.mypassword = "პაროლის ველი ცარიელია";
  }
  if (password1 != password2) {
    errors.mypassword2 = "პაროლები არ ემთხვევა";
  }

  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "გთხოვთ მონიშნოთ წესების ველი";
  }
  let age = false;

  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "გთხოვთ მონიშნოთ თქვენი ასაკი";
  }

let emaielField = document.getElementById("email");
emaielField.addEventListener("focus", function () {
  emaielField.style.outline = "none";
});

emaielField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;
  let spanErrorText = document.getElementById("error_email");
  let emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailPattern)) {
    spanErrorText.innerText = "მაილი შეესაბამება მოთხოვნებს";
    spanErrorText.style.color = "green";
    emaielField.style.border = "2px solid green";
  } else {
    spanErrorText.innerText = "მაილი არ შეესაბამება მოთხოვნებს";
    spanErrorText.style.color = "red";
    emaielField.style.border = "2px solid red";
  }

  if (emailValue == "") {
    spanErrorText.innerText = " ";
  }

});
  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = " ";
  });

  for(let item in errors){
    console.log(item);

    let spanError= document.getElementById("error_" + item );
    
    if(spanError){
      spanError.innerText = errors[item];
    }
  }
  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});

// togglr Show/hide
let passwordInputs = document.querySelectorAll(".password-input");
let toggleIcons = document.querySelectorAll(".toggle-icon");

toggleIcons.forEach(function (toggleIcon, i) {
  toggleIcon.addEventListener("click", function () {
    if (passwordInputs[i].type === "password") {
      passwordInputs[i].setAttribute("type", "text");
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordInputs[i].setAttribute("type", "password");
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  });
});