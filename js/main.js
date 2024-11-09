// js for toggle

bargar = document.querySelector('.bargar')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
navlist = document.querySelector('.nav-list')

bargar.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    logo.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
})

// Get the link element by its ID
var paymentOptionLink = document.getElementById('payment-option-link');

// Add a click event listener
paymentOptionLink.addEventListener('click', function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Redirect to the payment options page
    window.location.href = 'payment_options.html';
});