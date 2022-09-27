import Express from 'express';
import contatoRotas from './routers/contatoRotas.js';
import db from './database/db_config.js';

const server = Express();
server.use(contatoRotas);

server.set('view engine', 'pug');
server.set('views', './views');

db.sync()
  .then(() => {
    console.log(`Banco de Dados ${process.env.DB_NAME}`);
  })
  .catch((err) => {
    console.log(`Erro ao tentar conectar ${err}`);
  })
  .finally(() => {
    server.listen(process.env.PORT, () => {
      console.log(`Servidor escutando na porta ${process.env.PORT}.`);
    });
  });

console.log('Fim da aplicação');
