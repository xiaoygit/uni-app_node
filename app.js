const express = require('express')
const app = express()
const port = 2880
const cors = require('cors')
// 引入路由表
const userRouter = require('./router/index')

app.use((req, res, next) => {
    res.error = (err, status = 2001) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/api/stockIo', userRouter)

app.listen(port, () => console.log(`127.0.0.1:${port}!`))