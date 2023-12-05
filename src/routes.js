 // Importa o framework para fazer um roteador Express
import express from 'express';

 // Faz a criação de um roteador Express
const router = express.Router();

// Importa toadas as funções do ClienteController
import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';

// Faz as rotas para o CRUD no recurso dos 'clientes'
router.get('/clientes', buscarTodos);
router.get('/cliente/:Id_Cliente', buscarUm);
router.post('/cliente', inserir);
router.put('/cliente/:Id_Cliente', alterar);
router.delete('/cliente/:Id_Cliente', excluir);

export { router as default};// Exporta o roteador