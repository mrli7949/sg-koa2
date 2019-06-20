"use strict";
// import * as Koa from 'koa';
// import * as Router from "koa-router";
Object.defineProperty(exports, "__esModule", { value: true });
// const app: Koa = new Koa();              // 新建一个Koa对象
// const router: Router = new Router();     // 新建一个koa-router对象
// router.get('/*', async (ctx: any) => {       // 截获所有路由,都指向此函数
//     ctx.body = "Hello Koa and TS,I am keysking.";      // 向浏览器返回数据
// })
// app.use(router.routes());   // 使用路由
// app.listen(3001);           // 监听3000端口
const Koa = require("koa");
const app = new Koa();
const views = require('koa-views');
// import views from 'koa-views';
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const index = require('./routes/index');
const users = require('./routes/users');
// error handler
onerror(app);
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(views(__dirname + '/views', {
    extension: 'pug'
}));
// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
module.exports = app;
