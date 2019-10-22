import * as Router from "koa-router";
const router:Router = new Router();

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/child', function (ctx, next) {
  ctx.body = 'this is a users/child response'
})

module.exports = router
