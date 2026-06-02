function modalHandler() {
    const modal = document.querySelector(".separador");
    modal.classList.toggle("show");
}

let textoResultado = document.getElementById('texto-resultado');

const btnCalcular = document.getElementById('btnCalcular');

textoResultado.textContent =
    `Você leu 0% dos livros desejados para este ano! Bora ler mais alguns?`;

btnCalcular.addEventListener('click', () => {

    const livrosLidos =
        Number(document.getElementById('livrosLidos').value);

    const livrosDesejados =
        Number(document.getElementById('livrosDesejados').value);

        if(livrosLidos <= 0 || livrosDesejados <= 0) {
            alert('Digite valores válidos para as quantidades!');
            return;
        }

    let resultado = (livrosLidos / livrosDesejados) * 100;

    textoResultado.textContent =
        `Você leu ${resultado.toFixed(1)}% dos livros desejados para este ano!
Bora ler mais alguns?`;
});

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