const schema = require('./schema.js');
const users = require('./users.js');
// const doctor = require('./migrations/doctor.js');

async function initialize() {
  try {
    await schema();

    await users();
    // await doctor();
    //   console.log('Tabela de Médicos criada ou verificada com sucesso.');
    console.log('Esquema/Tabelas criado ou verificado com sucesso.');

  } catch (error) {
      console.error('Erro ao executar migrações:', error);
    throw error;
  }
}

module.exports = initialize;