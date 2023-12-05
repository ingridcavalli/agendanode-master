// require('dotenv').config({path:'config.env'});

import express from 'express'; // Importa o framework para criar o servidor
import cors from 'cors'; // Importa o middleware
import routes from './routes.js'; // Importa o arquivo routes


const server = express(); // Criando a variável do servidor Express

server.use(cors()); //Verifica o CORS para as rotas

express.urlencoded({extended:true});// Faz a habilitação da análise de dados codificados em URL


server.use('/api', routes); // Coloca o '/api' nas rotasss

server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);// Inicia o servidor
})
