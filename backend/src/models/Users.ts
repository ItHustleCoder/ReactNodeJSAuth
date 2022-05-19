import { Model } from "sequelize";
import { User } from "../types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<User> implements User {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
  }

  Users.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { sequelize, modelName: "users" }
  );

  return Users;
};
