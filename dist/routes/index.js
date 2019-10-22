"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const fs = require("fs");
const path = require("path");
const router = new Router();
const files = fs.readdirSync(__dirname);
files
    .filter(file => ~file.search(/(^[^\.].*\.js$)|(^[^\.].*\.ts$)/))
    .forEach(file => {
    const file_name = file.substr(0, file.length - 3);
    const file_entity = require(path.join(__dirname, file));
    if (file_name !== 'index') {
        router.use(`/${file_name}`, file_entity.routes(), file_entity.allowedMethods());
    }
});
module.exports = router;
