const db = require('../db/index')
const jwt = require('jsonwebtoken')

// 登录
exports.login = (req, res) => {
    const userInfo = req.body
    const sqlStr = `select * from sio_user where phone=${userInfo.phone}`
    db.query(sqlStr, (err, results) => {
        if (err) return res.error(err)
        if (results.length !== 1) return res.error('该用户不存在,请检查手机号')
        if (results[0].password !== userInfo.password) return res.error('密码错误')
        // 生成token
        const user = { ...results[0] }
        const token = jwt.sign(user, 'stockIO ^_^!!!', { expiresIn: '10h' })
        res.send({ status: 200, message: '登录成功', token:token, data: results[0] })
    })
}

// 注册
exports.regist = (req, res) => {
    const { phone, username, realName, password } = req.body
    if (!phone || !username || !realName || !password) return res.send({ status: 201, message: '表单不能有空值' })
    const searchSql = `select * from sio_user where phone = ?`
    db.query(searchSql, phone, (err, results) => {
        if (err) return res.error(err)
        if (results.length > 0) {
            res.send({ status: 202, message: '该用户已注册' })
            return
        }
        const sqlStr = `insert into sio_user(phone, username, realName, password) values(${phone}, "${username}", "${realName}", "${password}")`
        db.query(sqlStr, (err, response) => {
            if (err) return res.error(err)
            res.send({ status: 200, message: '注册成功' })
        })
    })
}