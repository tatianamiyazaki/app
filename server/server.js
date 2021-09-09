const express = require('express');
const server = express();

const porta = 3011;

server.listen(porta, () => console.log(`Servidor Rodando na Porta: ${porta}`));

server.get('/', (requisicao, resposta) => {
    console.log('Rota de CEP Encontrada!!!');
    const { cep } = requisicao.query;
    console.log('>> ' + cep);
})