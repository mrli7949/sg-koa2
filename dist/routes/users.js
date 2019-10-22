"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!';
});
router.get('/child', function (ctx, next) {
    ctx.body = 'this is a users/child response';
});
module.exports = router;
