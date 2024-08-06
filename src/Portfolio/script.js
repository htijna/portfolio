document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSc_0Y_NtUChD54cT4vnFeEZMfMwIOxvar36G87YZzZHLSuLAw/viewform?usp=sf_link', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'entry.2005620554': name,
            'entry.1045781291': email,
            'entry.839337160': message
        })
    }).then(function() {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contact-form').reset();
    }).catch(function(error) {
        alert('There was an error submitting your message. Please try again.');
    });
});
