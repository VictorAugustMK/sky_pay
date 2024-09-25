
const express = require('express');
const cors = require('cors');

const conn = require('./db/conn');
const initialize = require('./migrations/migrations.js'); 
const userRouters = require('../api/routes/users.js');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRouters);

conn.sync()
  .then(async () => {

    await initialize();
    
    app.listen(8800, () => {
      console.log('Servidor rodando na porta 8800');
    });
  })
  .catch((err) => console.log('Erro ao sincronizar o banco de dados:', err));
  