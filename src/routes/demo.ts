import * as Router from "koa-router";
const router:Router = new Router();

router.get('/', function (ctx, next) {
  ctx.body = 'demo'
})

router.get('/child', function (ctx, next) {
  ctx.body = 'demo child'
})

module.exports = router