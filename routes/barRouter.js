const Router =require('express')
const router = new Router()
const barController = require('../controllers/barController')



router.get('/', barController.getAll)
router.get('/:id', barController.getOne)


module.exports = router