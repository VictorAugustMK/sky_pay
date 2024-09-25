
const db = require('../db/conn');

const schema = 'skyart';

async function verify_and_create() {
  try {
    const verify_schema = await db.query(`
      SELECT schema_name 
      FROM information_schema.schemata 
      WHERE schema_name = '${schema}';`, 
      { type: db.QueryTypes.SELECT, logging: false }
    );

    if (verify_schema.length > 0) {
      // console.log(`O esquema '${schema}' já existe.`);
    } else {
      // console.log(`O esquema '${schema}' não existe. Criando agora...`);
      await db.query(`CREATE SCHEMA IF NOT EXISTS ${schema};`, { logging: false });
      // console.log(`O esquema '${schema}' foi criado com sucesso!`);
    }
  } catch (error) {
    console.error('Erro ao verificar/criar esquema:', error);
  }
}

module.exports = verify_and_create;