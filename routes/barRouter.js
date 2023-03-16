const Router =require('express')
const router = new Router()
const barController = require('../controllers/barController')
const chekRole = require('../middlewere/chekRoleMiddlewere')


router.post('/', barController.create)
router.get('/', barController.getAll)
router.get('/:id', barController.getOne)
router.delete('/:id', barController.deleteBar)
router.patch('/:id', barController.updateBar)



module.exports = router

