const {Bars} = require ('../models/models')
const ApiError = require('../error/ApiError')

class BarController {
    async create(req, res){
        const {name} = req.body
        const bar = await Bars.create({name})
        return res.json(bar)
    }
   
    async getAll(req, res){
        
        const bars = await Bars.findAll()
        // console.log({bars});
        return res.json(bars)
    }
    async getOne(req, res){
        const {id} = req.params
        const bar = await Bars.findOne(
            {
                where: {id},
            }, 
        )
        return res.json(bar)
    }
   
}





module.exports = new BarController()