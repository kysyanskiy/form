document.getElementById("ticketForm").onsubmit = function(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var ticketType = document.getElementById("ticketType").value;
    var ticketQuantity = document.getElementById("ticketQuantity").value;
    var errorMessage = document.getElementById("errorMessage");

    if (!firstName || !lastName || !email || !ticketType || !ticketQuantity) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Замовлення прийнято");
        document.getElementById("ticketForm").reset();
    }
};
