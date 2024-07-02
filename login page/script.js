document.addEventListener('DOMContentLoaded', () => {
  // Selecting the form and its elements
  const form = document.querySelector('form');
  const usernameInput = document.querySelector('input[name="uname"]');
  const passwordInput = document.querySelector('input[name="psw"]');
  const rememberCheckbox = document.querySelector('input[name="remember"]');
  const cancelButton = document.querySelector('.cancelbtn');

  // Function to handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting normally
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const remember = rememberCheckbox.checked;

    if (username === "" || password === "") {
      alert("Username and Password cannot be empty");
      return;
    }

    console.log("Form submitted!");
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Remember Me: ${remember}`);

    // Here you can add code to send the form data to the server using AJAX or Fetch API

    // For demonstration, let's reset the form
    form.reset();
  });

  // Function to handle cancel button
  cancelButton.addEventListener('click', () => {
    form.reset(); // Reset the form fields
  });
});
