"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 用户数据模型
 * @param {*} sequelize
 * @param {*} DataTypes
 * 此模型仅限关系型数据库使用
 */
exports.default = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        //id
        id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //用户名
        username: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        //密码
        password: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        //是否删除 true是 false否
        isDelete: {
            type: DataTypes.INTEGER(2),
            allowNull: true
        },
        //创建时间
        createdAt: {
            type: DataTypes.INTEGER(32),
            allowNull: false,
            defaultValue: new Date().getTime()
        },
        //修改时间
        updatedAt: {
            type: DataTypes.INTEGER(32),
            allowNull: false,
            defaultValue: new Date().getTime()
        }
    }, {
        tableName: 'users'
    });
};
