const {Bars} = require ('../models/models')
const ApiError = require('../error/ApiError')

class BarController {
    // async create(req, res){
    //     const {name} = req.body
    //     const bar = await Bars.create({name})
    //     return res.json(bar)
    // }
   
    async getAll(req, res){
        
        const bars = await Bars.findAll()
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
   
    async create(req, res, next){
        try{
            const {id, name, pictureMain, picture_1, picture_2, description, rating, address, city, latitude_N, longitude_E} = req.body
           
            const bar = await Bars.create({id, name, pictureMain, picture_1, picture_2, description, rating, address, city, latitude_N, longitude_E})
            
            return res.json(bar)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}





module.exports = new BarController()