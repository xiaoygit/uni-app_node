const express = require('express')
const router = express.Router()
const user = require('../user/index')
const shop = require('../shop/index')

// 登录
router.post('/login', user.login)
// 注册
router.post('/regist', user.regist)

/**
 * 内置商城接口
 */
// banner
router.get('/shop/banner', shop.getBannerList)
// 商品热销
router.get('/shop/commodityHot', shop.getCommodityListHot)
// 其他活动商品
router.get('/shop/commodityActive', shop.getCommodityListActive)
// 导出路由
module.exports = router