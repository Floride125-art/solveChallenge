$(document).ready(function() {
  const myform = document.querySelector('.container .leftside form');
  const myemail = document.querySelector('.container .leftside form input[type=email]');
  myform.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailValue = myemail.value;
    console.log(myemail.value);
    if (validateEmail(emailValue)) {
      myform.classList.remove('error');
    } else {
      myform.classList.add('error');
    }
  });
  function validateEmail (myemail) {
    var emPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emPattern.test(String(myemail).toLowerCase());
  }
  });