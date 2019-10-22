export const mysqlConfig = {
    DB_type: 'mysql', // 数据库类型
    dbName: 'webDB', //命名为唯一 调用的时候
    host: 'localhost', // 服务器地址
    port: 3306,
    user: 'root', // 数据库用户名
    password: 'root2019', // 数据库密码
    database: 'web_test_db', // 数据库名称
    dialectOptions: {
        charset: 'utf8mb4',
        supportBigNumbers: true,
        bigNumberStrings: true,
    },
    pool: {// 连接池连接数量
        max: 50, 
        min: 0,
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    }
}