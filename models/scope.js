'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scope extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Scope.init(
    {
      scope: DataTypes.STRING,
      description: DataTypes.STRING,
      access: DataTypes.STRING,
      isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: 'E2M_Scopes',
    }
  );
  return Scope;
};
