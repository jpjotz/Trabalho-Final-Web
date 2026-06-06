function modalHandler() {
    const modal = document.querySelector(".separador");
    modal.classList.toggle("show");
}

const botao = document.getElementById('btnSend');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {

    if(nome.value == "" || nome.value == null || email.value == "" || email.value == null || mensagem.value == "" || mensagem.value == null) {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    alert('Mensagem enviada com sucesso!');
    nome.value = "";
    email.value = "";
    mensagem.value = "";
})