import * as Router from "koa-router";
import * as fs from 'fs';
import * as path from 'path';
const router: Router = new Router();

const files = fs.readdirSync(__dirname)
files
    .filter(file => ~file.search(/(^[^\.].*\.js$)|(^[^\.].*\.ts$)/))
    .forEach(file => {
        const file_name = file.substr(0, file.length - 3);
        const file_entity = require(path.join(__dirname, file));
        if (file_name !== 'index') {
            router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods())
        }
    })

router.get('/', async function (ctx, next) {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

module.exports = router