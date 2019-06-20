"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    });
});
router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string';
});
router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    };
});
module.exports = router;
