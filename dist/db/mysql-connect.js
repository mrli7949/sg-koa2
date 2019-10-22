"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
const mysql = require('mysql2');
// 创建数据库连接
const pool = mysql.createConnection({
    host: config_1.mysqlConfig.host,
    user: config_1.mysqlConfig.user,
    password: config_1.mysqlConfig.password,
    database: config_1.mysqlConfig.database,
    charset: 'utf8',
    //以下选项均为默认值（如果不需要变动可省略）
    acquireTimeout: 10000,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 //连接池的最大请求数，从getConnection方法前依次排队。设置为0将没有限制
});
