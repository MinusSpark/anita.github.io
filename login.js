document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Credenciales predefinidas
    const validUsername = "emea4ever";
    const validPassword = "Yoko";

    // Obtener valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar credenciales
    if (username === validUsername && password === validPassword) {
        document.getElementById('message').innerText = "Login successful!";
        document.getElementById('message').style.color = "green";
        // Aquí puedes redirigir al usuario a otra página
         window.location.href = "menu.html";
    } else {
        document.getElementById('message').innerText = "Invalid username or password.";
        document.getElementById('message').style.color = "red";
    }
});

