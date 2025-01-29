// 1. Form Submission
document.getElementById('appoinmentform').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const birthday = document.getElementById('birthday').value;
    const doctor = document.getElementById('doctor').value;

    // Simple form validation
    if (!name || !email || !birthday || !doctor) {
        alert('Please fill out all required fields.');
        return;
    }

    // Success message (for now, we'll just display an alert)
    alert(`Appointment booked successfully for ${name}.\nDoctor: ${doctor}\nDate: ${birthday}\nContact: ${number}`);
    
    // Reset the form (optional)
    document.getElementById('appoinmentform').reset();
});

// 2. Hamburger Menu for Mobile Devices
const menuToggle = document.getElementById('menu-toggle'); // The button to open/close menu
const nav = document.querySelector('nav');

// Create a menu toggle button for mobile view
document.querySelector('header').insertAdjacentHTML('beforeend', `<button id="menu-toggle" aria-label="Toggle navigation">&#9776;</button>`);

// Toggle the navigation menu
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
});

// Optional: close the menu if any nav link is clicked (for better mobile UX)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});
