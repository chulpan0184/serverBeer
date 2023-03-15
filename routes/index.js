const Router = require('express')
const router = new Router()

const barRouter = require('./barRouter')

router.use('/bars', barRouter)

module.exports = router