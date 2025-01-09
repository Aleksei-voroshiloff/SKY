'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Trassa}) {
      // comment принадлежит одному пользователю
      this.belongsTo(User, {foreignKey: 'userId', as: 'user'});
      // comment принадлежит одной трассе
      this.belongsTo(Trassa, {foreignKey: 'trassaId', as: 'trassa'});
    }
  }
  Comment.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    trassaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};