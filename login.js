let formValidation = document.getElementById('form')
let myInput = document.getElementById("passwordfield2");
let userName = document.getElementById('username');
let errorText = document.getElementById('errortext')
let errorPass = document.getElementById('errorpassword')
let strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
let regularEx= "^[A-Za-z][A-Za-z0-9_]{7,29}$";



  userName.addEventListener('keydown', function(){
      if(userName.value.match(regularEx)) {  
          errorText.innerText = 'Username მისაღებია'
          errorText.style.color = 'green' ;
        } else {
          errorText.innerText = 'გთხოვთ ჩაწეროთ სხვა Username '
          errorText.style.color = 'red' ;
        }
  
  })
  
  myInput.addEventListener('keyup', function(){
      if(myInput.value.match(strongRegex)) {  
          errorPass.innerText = 'ძლიერი პაროლი'
          errorPass.style.color = 'green' ;
        } else {
          errorPass.innerText = 'სუსტი პაროლი, გთხოვთ ჩაწეროთ სხვა პაროლი'
          errorPass.style.color = 'red' ;
        }
      })