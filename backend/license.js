const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const License = sequelize.define('License', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  licenseKey: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = License;
