document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('error-message');

    if (!name || !email || !phone || !message) {
        errorMessage.innerText = 'Tous les champs doivent être remplis.';
        event.preventDefault();
    }
});
