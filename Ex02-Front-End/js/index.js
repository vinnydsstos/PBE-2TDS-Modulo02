function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Recuperando a linguagem selecionada
    const language = document.getElementById('language').value;
    
    // Fazendo a requisição com o cabeçalho 'Accept-Language'
    fetch('http://localhost:8080/usuario/login', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept-Language': language // Enviando a linguagem selecionada
        },
        body: JSON.stringify({ username, password, remember })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);  // A resposta do backend já contém a mensagem traduzida
            window.location.href = 'dashboard.html';
        } else {
            alert(data.message);  // A resposta do backend já contém a mensagem de erro traduzida
        }
    })
    .catch(error => {
        alert("Erro ao fazer login");
        console.log(error);
    });
}

function changeLanguage() {
    const language = document.getElementById('language').value;
    // Altera o conteúdo do título e do botão conforme a linguagem
    if (language === 'en') {
        document.getElementById('login-title').textContent = "Login";
        document.getElementById('login-button').textContent = "Login";
        document.getElementById('remember-label').textContent = "Remember me";
        document.getElementById('signup-button').textContent = "Sign up";
    } else if (language === 'es') {
        document.getElementById('login-title').textContent = "Iniciar sesión";
        document.getElementById('login-button').textContent = "Iniciar sesión";
        document.getElementById('remember-label').textContent = "Recordarme";
        document.getElementById('signup-button').textContent = "Regístrate";
    } else {
        document.getElementById('login-title').textContent = "Login";
        document.getElementById('login-button').textContent = "Entrar";
        document.getElementById('remember-label').textContent = "Lembrar minha senha";
        document.getElementById('signup-button').textContent = "Cadastre-se";
    }
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

// Objetos de tradução
const translations = {
    en: {
        "login-title": "Login",
        "username-placeholder": "Username",
        "password-placeholder": "Password",
        "remember-label": "Remember my password",
        "login-button": "Log In",
        "signup-button": "Sign Up"
    },
    pt: {
        "login-title": "Login",
        "username-placeholder": "Usuário",
        "password-placeholder": "Senha",
        "remember-label": "Lembrar minha senha",
        "login-button": "Entrar",
        "signup-button": "Cadastre-se"
    },
    es: {
        "login-title": "Iniciar sesión",
        "username-placeholder": "Usuario",
        "password-placeholder": "Contraseña",
        "remember-label": "Recordar mi contraseña",
        "login-button": "Iniciar sesión",
        "signup-button": "Regístrate"
    }
};

// Função que altera o idioma
function changeLanguage() {
    const language = document.getElementById("language").value;
    const selectedTranslations = translations[language];

    // Atualizando os textos da página com base nas traduções
    document.getElementById("login-title").innerText = selectedTranslations["login-title"];
    document.getElementById("username").placeholder = selectedTranslations["username-placeholder"];
    document.getElementById("password").placeholder = selectedTranslations["password-placeholder"];
    document.getElementById("remember-label").innerText = selectedTranslations["remember-label"];
    document.getElementById("login-button").innerText = selectedTranslations["login-button"];
    document.getElementById("signup-button").innerText = selectedTranslations["signup-button"];
}
