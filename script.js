/// Select the register form by its ID
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const username = event.target.username.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.password.value.trim();

        if (!username || !email || !password) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate successful registration
        alert(`User registered:\nUsername: ${username}\nEmail: ${email}`);
        window.location.href = 'login.html'; // Redirect to login page
    });
}
