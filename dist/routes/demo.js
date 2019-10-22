"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.get('/', function (ctx, next) {
    ctx.body = 'demo';
});
router.get('/child', function (ctx, next) {
    ctx.body = 'demo child';
});
module.exports = router;
