"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as name from 'name'; commonjs模块的导入方法 的ts导入方法
const Koa = require("koa");
const app = new Koa();
const views = require('koa-views');
// import views from 'koa-views';
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const path = require('path');
const MainRoutes = require('./routes/index');
// error handler
onerror(app);
// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
// install the engines you wish to use
app.use(views(path.resolve(__dirname, '../web'), {
    map: {
        html: 'underscore'
    }
}));
// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const end = new Date();
    const ms = end.getTime() - start.getTime();
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
// routes
app.use(MainRoutes.routes()).use(MainRoutes.allowedMethods());
// app.use(index.routes()).use(index.allowedMethods())
// app.use(users.routes()).use(users.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
exports.default = app;
