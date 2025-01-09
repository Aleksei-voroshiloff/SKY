'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trassa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Comment }) {
      // trassa может иметь много комментариев
      this.hasMany(Comment, { foreignKey: 'trassaId', as: 'comments' });
      // trasssa принадлежит одному пользователю
      this.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    }
  }
  Trassa.init(
    {
      title: DataTypes.STRING,
      address: DataTypes.STRING,
      description: DataTypes.STRING,
      coordinate: DataTypes.STRING,
      image: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Trassa',
    },
  );
  return Trassa;
};
