'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJwt() {
      const { id, email } = this
      const token = jwt.sign({ id, email }, process.env.JWT_SECRET)
      return token
    }

    comparePassword(password) {
      return bcrypt.compareSync(password, this.password)
    }

    encrypt() {
      const salt = bcrypt.genSaltSync(10)
      this.password = bcrypt.hashSync(this.password, salt)
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Email cannot be empty' },
          notEmpty: { msg: 'Email cannot be empty' },
        },
        unique: { msg: 'Email already exist' },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Password cannot be empty' },
          notEmpty: { msg: 'Password cannot be empty' },
          len: { args: [6], msg: 'Password must be higher than 6 character' },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Name cannot be empty' },
          notEmpty: { msg: 'Name cannot be empty' },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user) => user.encrypt(),
      },
      sequelize,
      modelName: 'User',
    },
  )
  return User
}
