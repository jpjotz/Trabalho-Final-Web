function modalHandler() {
    const modal = document.querySelector(".separador");
    modal.classList.toggle("show");
}

const params = new URLSearchParams(window.location.search);
const categoria = params.get('categoria');

let todosLivros = [];

function renderizarLivros(livros) {
    const container = document.getElementById('livros-container');

    container.innerHTML = livros.map(livro => `
        <div class="livro-card">
            <figure class="livro-capa">
                <img src="${livro.imagem}" alt="${livro.titulo}">
            </figure>

            <div class="livro-info">
                <div class="livro-detalhes">
                    <h3 class="livro-titulo">${livro.titulo}</h3>
                </div>

                <div class="card-infos">
                    <span class="status-tag disponivel">Disponível</span>

                    <br>

                    <button class="btnTroca">Trocar Livro</button>
                </div>
            </div>

            <i class="fa-solid fa-bookmark icone-bookmark"></i>
        </div>
    `).join('');
}

fetch('../js/livros.json')
    .then(res => res.json())
    .then(livros => {
        todosLivros = livros;

        if (categoria) {
            const filtrados = livros.filter(livro => livro.categoria.toLowerCase() === categoria.toLowerCase());
            renderizarLivros(filtrados);
        } else {
            renderizarLivros(livros)
        }

    });

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btnTroca')) {
        alert("Livro selecionado para troca!");
    }
});

const searchInput = document.getElementById('search');

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const termo = searchInput.value.toLowerCase();

        const resultado = todosLivros.filter(livro => {
            return livro.titulo.toLowerCase().includes(termo) || livro.categoria.toLowerCase().includes(termo);
        });

        renderizarLivros(resultado);
    }
})