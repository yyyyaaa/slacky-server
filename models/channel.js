export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN,
  });

  Channel.associate = (models) => {
    // 1:m
    Channel.belongsTo(models.Team, {
      foreignKey: 'teamId',
    });
  };

  return Channel;
};
