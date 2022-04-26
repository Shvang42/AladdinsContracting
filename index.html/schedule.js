

function sendEmail(){
    Email.send({
    SecureToken : "de236c8f-8eb3-45dc-a07c-ef632176aec2",
    To : 'aladdingscontracting@gmail.com',
    From : document.getElementById("email").value,
    Subject : " Appointment Inquiry",
    Body : "Name: "+document.getElementById("name").value 
    + "<br> Email:" +document.getElementById("email").value
    + "<br> Phone Number:" +document.getElementById("phone").value
}).then(
    message => alert(message)
);
}
 