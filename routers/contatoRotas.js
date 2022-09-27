import { Router } from 'express';
import contatoController from '../controllers/contatoController.js';

const rotas = Router();

rotas.get('/contatos/:id?', contatoController.index);

rotas.get('/cadastrar', contatoController.cadastrar);

//rotas.get('/listar', contatoController.listar);

export default rotas;
