// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Get the signup form
    const form = document.getElementById('signupForm');

    // Add an event listener for form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        await handleSubmit(); // Call the handleSubmit function
    });

    // Define the handleSubmit function
    async function handleSubmit() {
        // Get values from the form fields
        const firstnameValue = document.getElementById('firstname').value;
        const lastnameValue = document.getElementById('lastname').value;
        const usertypeValue = document.getElementById('user-type').value;
        const teamValue = document.getElementById('team').value;
        const emailValue = document.getElementById('email').value;
        const passwordValue = document.getElementById('pass').value;

        try {
            // Send a POST request to the server with form data
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: firstnameValue,
                    lastname: lastnameValue,
                    usertype: usertypeValue,
                    team: teamValue,
                    email: emailValue,
                    password: passwordValue
                })
            });
            
            // Check if the response is not ok
            if (!response.ok) {
                throw new Error('response error');
            }
            console.log('Form submitted successfully:', response);
        } catch (error) {
            console.error('fetch error testing catch', error); // Log any errors that occur during the fetch
        }
    }
});
