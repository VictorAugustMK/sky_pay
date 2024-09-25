const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', '12345', {
  host: '10.0.0.170',
  dialect: 'postgres',
  define: 'skyart',
  logging: false
})

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectamos com o DB!');
  } catch (error) {
    console.error('Não foi possível conectar:', error);
  }
};

connectDb();

module.exports = sequelize
