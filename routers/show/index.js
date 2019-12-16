const Router = require('koa-router');
const path = require('path');
const common = require('../../libs/common');


let router = new Router();

router.post('/login', async ctx => {
    
    // let {username, password}=ctx.request.fields;

    // await ctx.db.query(`select * from user where username = ? AND password = ?`,[username,common.md5(password)]).then((result, err) => {
    //     if(err){
    //         ctx.body = {err:1,msg:'数据库异常'}
    //     }else{
    //         if(!result.length){
    //             ctx.body = {err:1,msg:'账号密码不正确',data: 0}
    //         }else{
    //             ctx.body = {err:0,msg:'登录成功',data:result}
    //         }
    //     }
    // });
});

router.post('/addList', async ctx => {
    // const post = ctx.request.fields;
    // let keys = ['title','backimg','address','date','Detailed_address','star'];
    // let vals = [];
    // keys.forEach(key => {
    //     //处理文件
    //     if(key == 'backimg'){
    //         if(post.backimg && post.backimg.length && post.backimg[0].size){
    //             vals.push(path.basename(post.backimg[0].path));
    //         }
    //         return false;
    //     }
    //     vals.push(post[key]);
    // })
    // console.log(vals)
    // return false;
    // let res = await ctx.db.query(`INSERT INTO list (${keys.map(key=>(`${key}`)).join(',')}) VALUES (${keys.map(key=>'?').join(',')})`,vals);
    // if(res.affectedRows < 1){
    //     ctx.body = '没有插入';
    // }else{
    //     ctx.body = '已插入';
    // }

    const post = ctx.request.fields;
    let names = [];
    let vals = [];
    for(let obj in post){
        names.push(obj);
        if(obj == 'backimg'){
            if(post.backimg && post.backimg.length && post.backimg[0].size){
                vals.push(path.basename(post.backimg[0].path));
            }
        }else{
            vals.push(post[obj]);
        }
    }
    console.log(names,vals)
    let res = await ctx.db.query(`INSERT INTO list (${names.map(key=>(`${key}`)).join(',')}) VALUES (${names.map(key=>'?').join(',')})`,vals);
    if(res.affectedRows < 1){
        ctx.body = '添加失败';
    }else{
        ctx.body = '添加成功';
    }
})

router.get('/getList',async ctx => {
    await ctx.db.query(`select * from list`).then((result,err) => {
        if(err){
            ctx.body = {err:1,msg:'数据库异常',data:0}
        }else{
            if(!result.length){
                ctx.body = {err:1,msg:'没有数据',data:0}
            }else{
                ctx.body = {err:0,msg:'成功',data:result}
            }
        }

    })
})





module.exports = router.routes();