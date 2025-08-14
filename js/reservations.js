document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Display the confirmation message
            if (confirmationMessage) {
                confirmationMessage.style.display = 'block';
            }

            // Reset the form after a short delay
            setTimeout(() => {
                contactForm.reset();
                if (confirmationMessage) {
                    // Optionally hide the message again after some time
                    // confirmationMessage.style.display = 'none';
                }
            }, 200); // 200ms delay to allow users to see the filled form before it resets
        });
    }
});
