//import * as name from 'name'; commonjs模块的导入方法 的ts导入方法
import * as Koa from 'koa';
import * as Router from "koa-router";

const app:Koa = new Koa()
const views = require('koa-views')
// import views from 'koa-views';
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path')

const index:Router = require('./routes/index')
const users:Router = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

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

// routes
app.use(index.routes()).use(index.allowedMethods())
app.use(users.routes()).use(users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

export default app

