const Router = require('express')
const router = new Router()
// const deviceRouter = require('./deviceRouter')
// const userRouter = require('./userRouter')
const barRouter = require('./barRouter')
// const typeRouter = require('./typeRouter')


// router.use('/user', userRouter)
// router.use('/type', typeRouter)
router.use('/bars', barRouter)
// router.use('/device', deviceRouter)

module.exports = router