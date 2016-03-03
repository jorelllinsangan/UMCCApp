"use strict";

module.exports = function(sequelize, DataTypes) {
  var Problem = sequelize.define("problems", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    setter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    up: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    classMethods: {
      
    }
  });

  return Problem;
};