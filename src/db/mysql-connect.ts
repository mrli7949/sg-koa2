import { mysqlConfig } from '../config/config';
const mysql = require('mysql2');

// 创建数据库连接
const pool = mysql.createConnection({
    host: mysqlConfig.host,
    user: mysqlConfig.user,
    password: mysqlConfig.password,
    database: mysqlConfig.database,
    charset: 'utf8',

    //以下选项均为默认值（如果不需要变动可省略）
    acquireTimeout: 10000, //获取连接的毫秒 
    waitForConnections: true, //为true时，连接排队等待可用连接。为false将立即抛出错误
    connectionLimit: 10, //单次可创建最大连接数
    queueLimit: 0 //连接池的最大请求数，从getConnection方法前依次排队。设置为0将没有限制
});