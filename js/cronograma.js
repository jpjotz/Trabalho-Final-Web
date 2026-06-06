function modalHandler() {
    const modal = document.querySelector(".separador");
    modal.classList.toggle("show");
}

const searchInput = document.getElementById('search');

function pesquisar() {
    const termo = searchInput.value.trim();

    if (termo) {
        window.location.href = `livros.html?busca=${encodeURIComponent(termo)}`;
    }
}

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        pesquisar();
    }
});