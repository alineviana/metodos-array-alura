let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {

    const response = await fetch(endpointDaAPI);

    livros = await response.json();

    livros = aplicarDesconto(livros);

    exibirOsLivrosNaTela(livrosComDesconto);
}