function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, remember })
    })
    .then(response => response.json())
    .then(data => alert("Login realizado com sucesso!"))
    .catch(error => alert("Erro ao fazer login"));
}

function changeLanguage() {
    const lang = document.getElementById('language').value;
    const translations = {
        en: { loginTitle: "Login", username: "Username", password: "Password", remember: "Remember me", loginButton: "Login" },
        pt: { loginTitle: "Login", username: "Usuário", password: "Senha", remember: "Lembrar minha senha", loginButton: "Entrar" },
        es: { loginTitle: "Iniciar sesión", username: "Usuario", password: "Contraseña", remember: "Recordar mi contraseña", loginButton: "Ingresar" }
    };
    
    document.getElementById('login-title').textContent = translations[lang].loginTitle;
    document.getElementById('username').placeholder = translations[lang].username;
    document.getElementById('password').placeholder = translations[lang].password;
    document.getElementById('remember-label').textContent = translations[lang].remember;
    document.getElementById('login-button').textContent = translations[lang].loginButton;
}