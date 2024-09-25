
const db = require('../db/conn');

const schema = 'skyart';

async function usuarios() {
  try {
    const result = await db.query(`
      SELECT *
      FROM information_schema.tables
      WHERE table_schema = '${schema}' AND table_name = 'usuarios';
    `, { logging: false });

    if (result[0].length > 0) {
      return;
    }

    await db.query(`
      CREATE TABLE ${schema}.usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        fone VARCHAR(20),
        dt_nascimento DATE NOT NULL
      );
    `, { logging: false });

    console.log('Tabela "usuarios" criada com sucesso no esquema "skyart".');
  } catch (error) {
    console.error('Erro ao verificar/criar a tabela "usuarios":', error);
  }
}

module.exports = usuarios;
