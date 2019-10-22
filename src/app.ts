//import * as name from 'name'; commonjs模块的导入方法 的ts导入方法
import * as Koa from 'koa';
import * as Router from "koa-router";
import * as jwt from 'koa-jwt';

const app:Koa = new Koa()
const views = require('koa-views')
// import views from 'koa-views';
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path')
var cors = require('koa2-cors');

const MainRoutes :Router = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(cors());
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(path.resolve(__dirname, '../web')))

// install the engines you wish to use
app.use(views(path.resolve(__dirname, '../web'), {
  map: {
    html: 'underscore'
  }
}));


// logger
app.use(async (ctx, next) => {
  const start:Date = new Date()
  await next()
  const end:Date = new Date()
  const ms:number = end.getTime() - start.getTime()
  
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// const proviteKey = 'asfweergerhethrthrthtr'
// app.use(jwt({ // Static resource
//   secret: proviteKey
// }).unless({
//   //无需jwt的路由
//   path: [/^\/v1\/login\/aminLogin/, /^\/public/, /^\/assets/]
// }))

// routes
app.use(MainRoutes.routes()).use(MainRoutes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

export default app

