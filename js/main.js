function modalHandler() {
    const modal = document.querySelector(".separador");
    modal.classList.toggle("show");
}


const livrosDestaque = fetch('./js/livros-destaques.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('livros-destaques');

        data.forEach(livro => {
            const figure = document.createElement("figure");

            figure.innerHTML = `
                    <img src="${livro.imagem}" alt="${livro.titulo}">
                    <p>${livro.titulo}</p>`;

            container.appendChild(figure)
        })
    });

const searchInput = document.getElementById('search');

function pesquisar() {
    const termo = searchInput.value.trim();

    if (termo) {
        window.location.href = `pages/livros.html?busca=${encodeURIComponent(termo)}`;
    }
}

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        pesquisar();
    }
});