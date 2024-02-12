/*
*
*email.js
*
*Takes form elements and sents to email
**/ 

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contacts-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_8vli1vf', 'template_kvs5e5q', this)
      .then(function() {
        console.log('SUCCESS!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the message, please try again later.');
      });
  });
});


//**Pop up form*/
document.getElementById('contacts-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  showPopup(); // Show the popup
});

function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}


