const Koa = require('koa');
const Router = require('koa-router');
const static = require('./routers/static')
const body = require('koa-better-body');
const path = require('path');
const session = require('koa-session');
const fs = require('fs');
const config = require('./config');


let server = new Koa();
server.listen(config.PORT);
console.log(`server running at ${config.PORT}`);
server.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});

server.use(body({
    uploadDir: config.UPLOAD_DIR
}));


let router = new Router();
server.context.db = require('./libs/database');
server.context.config = config;

router.use('', require('./routers/show'));

static(router);

server.use(router.routes());