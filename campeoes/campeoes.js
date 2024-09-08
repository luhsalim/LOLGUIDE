const habilidades = {
    passiva: {
        video: '/videos/sett/passiva.mp4',
        descricao: 'Essa é a habilidade passiva de Sett. Ela faz XYZ.'
    },
    habilidade1: {
        video: '/videos/sett/habilidade1.mp4',
        descricao: 'Essa é a Habilidade 1 de Sett. Ela faz ABC.'
    },
    habilidade2: {
        video: '/videos/sett/habilidade2.mp4',
        descricao: 'Essa é a Habilidade 2 de Sett. Ela faz DEF.'
    },
    habilidade3: {
        video: '/videos/sett/habilidade3.mp4',
        descricao: 'Essa é a Habilidade 3 de Sett. Ela faz GHI.'
    },
    ultimate: {
        video: '/videos/sett/ultimate.mp4',
        descricao: 'Essa é a Ultimate de Sett. Ela faz JKL.'
    }
};

function mostrarHabilidade(habilidade, videoSrc, descricao) {
    // Mostra a área de vídeo e descrição
    const detalhes = document.getElementById('detalhes-habilidade');
    detalhes.classList.remove('escondido');

    // Atualiza o vídeo
    const video = document.getElementById('video-habilidade');
    video.src = videoSrc;
    video.load(); // Recarrega o vídeo

    // Atualiza a descrição
    const descricaoElemento = document.getElementById('descricao-habilidade');
    descricaoElemento.innerHTML = `<h3>${habilidade}</h3><p>${descricao}</p>`;

    // Escurece todos os ícones
    const icones = document.querySelectorAll('.icone-habilidade');
    icones.forEach(icone => {
        icone.classList.add('escurecido');  // Aplica a classe de escurecido em todos os ícones
        icone.classList.remove('selecionado'); // Remove a classe selecionado de todos
    });

    // Deixa o ícone clicado com opacidade normal
    const iconeSelecionado = document.querySelector(`img[alt="${habilidade}"]`);
    iconeSelecionado.classList.remove('escurecido');  // Remove o escurecimento do ícone selecionado
    iconeSelecionado.classList.add('selecionado');    // Adiciona a classe de selecionado
}
