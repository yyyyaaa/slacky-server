export default (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  Team.associate = (models) => {
    Team.belongsToMany(models.User, {
      through: 'Member',
      foreignKey: 'teamId',
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner',
    });
  };

  return Team;
};
