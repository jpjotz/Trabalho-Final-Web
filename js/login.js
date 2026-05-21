const iconeSenha = document.getElementById('eye-icon');
const inputSenha = document.getElementById('senha');

inputSenha.addEventListener('input', () => {
    if (inputSenha.value.length > 0) {
        iconeSenha.style.display = 'block';
    } else {
        iconeSenha.style.display = 'none';
        inputSenha.type = 'password';

        iconeSenha.classList.remove('fa-eye-slash');
        iconeSenha.classList.add('fa-eye');
    }
});

iconeSenha.addEventListener('click', () => {
    if(inputSenha.type === "password") {
        inputSenha.type = "text";
        iconeSenha.classList.remove('fa-eye');
        iconeSenha.classList.add('fa-eye-slash')
    } else {
        inputSenha.type = "password";
        iconeSenha.classList.remove('fa-eye-slash');
        iconeSenha.classList.add('fa-eye');
    }
});
