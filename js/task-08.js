const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Comprueba si los campos están en blanco
  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Por favor, rellene todos los campos');
    return;
  }

  // Crea un objeto con los valores de los campos del formulario
  const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(formData); // Muestra los datos introducidos en la consola
  loginForm.reset(); // Borra los valores de los campos del formulario
});
