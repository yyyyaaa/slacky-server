import Sequelize from 'sequelize';

const sequelize = new Sequelize('slacky', 'postgres', 'postgres', {
  dialect: 'postgres',
  operatorsAliases: false,
});
const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
  Channel: sequelize.import('./channel'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
