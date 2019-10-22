"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlConfig = {
    DB_type: 'mysql',
    dbName: 'webDB',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'jdxTdPU0sr_A',
    database: 'web_test_db',
    dialectOptions: {
        charset: 'utf8mb4',
        supportBigNumbers: true,
        bigNumberStrings: true,
    },
    pool: {
        max: 50,
        min: 0,
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }
};
