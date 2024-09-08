// Função para realizar a pesquisa
function pesquisar() {
    const input = document.getElementById('input-pesquisa').value.toLowerCase();
    const resultados = document.querySelector('.resultados-pesquisa');

    // Limpa os resultados anteriores
    resultados.innerHTML = '';

    // Verifica se o input está vazio
    if (input.trim() === '') {
        return; // Se estiver vazio, não faz nada e retorna
    }

    // Filtra campeões com base no valor do input
    const campeoesFiltrados = campeoes.filter(campeao => campeao.nome.toLowerCase().includes(input));

    if (campeoesFiltrados.length === 0) {
        resultados.innerHTML = '<p>Nenhum campeão encontrado.</p>';
        return;
    }

    // Exibe os campeões filtrados
    campeoesFiltrados.forEach(campeao => {
        const campeaoHTML = `
                <div class="campeoes__destaque">
                    <a href="${campeao.link}">
                        <div class="campeao">
                            <img src="${campeao.imagem}" alt="${campeao.nome}">
                            <h3>${campeao.nome}</h3>
                            <p>${campeao.descricao}</p>
                        </div>
                    </a>
                </div>
        `;
        resultados.innerHTML += campeaoHTML;
    });
}

// Adiciona evento para monitorar alterações na barra de pesquisa
document.getElementById('input-pesquisa').addEventListener('input', function () {
    const inputValue = this.value.toLowerCase();

    // Se o campo for esvaziado, limpar os resultados
    if (inputValue.trim() === '') {
        document.querySelector('.resultados-pesquisa').innerHTML = '';
    } else {
        pesquisar(); // Chama a função de pesquisa se houver texto
    }
});