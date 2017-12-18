export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: {
      type: DataTypes.STRING,
    },
  });

  Message.associate = (models) => {
    // 1:m
    Message.belongsTo(models.Channel, {
      foreignKey: 'channelId',
    });
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };

  return Message;
};
