const db = require('../db/index')
// banner

exports.getBannerList = (req, res) => {
    const sqlStr = `select * from shop_banner`
    db.query(sqlStr, (err, results) => {
        if (err) return res.error(err)
        res.send({
            status: 200,
            data: results,
            message: 'success'
        })
    })
}

// 热销商品
exports.getCommodityListHot = (req, res) => {
    const sqlStr = `select * from shop_commodity_hot`
    db.query(sqlStr, (err, results) => {
        if (err) return res.error(err)
        res.send({
            status: 200,
            data: results,
            message: 'success'
        })
    })
}

// 活动商品
exports.getCommodityListActive = (req, res) => {
    const sqlStr = `select * from shop_commodity_active`
    db.query(sqlStr, (err, results) => {
        if (err) return res.error(err)
        res.send({
            status: 200,
            data: results,
            message: 'success'
        })
    })
}
