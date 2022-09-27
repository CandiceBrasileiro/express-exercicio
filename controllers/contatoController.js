import ContatoRepository from '../model/contatos.js';

// let contatos = [
//   {
//     id: 1,
//     nome: 'João',
//     email: 'joao@gmail.com',
//     telefone: '(83)99999-9999',
//   },
//   {
//     id: 2,
//     nome: 'tiago',
//     email: 'jtiago@gmail.com',
//     telefone: '(83)99999-5555',
//   },
// ];

async function index(request, response) {
  let id = request.params.id;
  if (id === undefined) {
    let contatos = await ContatoRepository.findAll();
    response.render('listar', { contatos: contatos });
    return;
  }
  let contato = await ContatoRepository.findByPk(id);
  // let contato = contatos[id];
  response.render('index', { contato: contato });
  // let id = request.params.id;
  // response.send(contatos[id]);
}

function cadastrar(request, response) {
  response.render('cadastrar');
}

// function listar(request, response) {
//   response.render('listar', { contatos: contatos });
// }

export default { index, cadastrar };
// export default { index, cadastrar, listar };
