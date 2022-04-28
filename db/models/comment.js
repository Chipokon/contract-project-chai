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
     static associate({User, Tea}) {
      Comment.belongsTo(User, {foreignKey: 'user_id'})
      Comment.belongsTo(Tea, {foreignKey: 'tea_id'})
      // define association here
    }
  }
  Comment.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    tea_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Tea',
        key: 'id',
      }
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
