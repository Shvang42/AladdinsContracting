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
        
        // Reset the form fields here after successful submission
        document.getElementById("contacts-form").reset();

        // Show the popup after resetting the form
        showPopup();
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send the message, please try again later.');
      });
  });
});

//**Pop up form*/
// This event listener seems redundant since you're already preventing default submission and handling the popup in the first event listener.
// You might want to remove this to avoid potential confusion or conflicts.

function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
