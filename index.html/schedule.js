

function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "aladdingscontracting@gmail.com",
    Password : "kdpyntzdhopmjkih",
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
 