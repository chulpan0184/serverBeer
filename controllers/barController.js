const {Bars} = require ('../models/models')
const ApiError = require('../error/ApiError')

class BarController {
   
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
            const {id, name, pictureMain, picture_1, picture_2, description, description_2, rating, address, city, latitude_N, longitude_E} = req.body
           
            const bar = await Bars.create({id, name, pictureMain, picture_1, picture_2, description, description_2, rating, address, city, latitude_N, longitude_E})
            
            return res.json(bar)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteBar (req, res){
        try {
          const {id} = req.params
      
          const bar = await Bars.destroy(
            {
                where: {id},
            }, 
          ).then(function(rowDeleted){
            if(rowDeleted === id){
               console.log('Deleted successfully');
             }
            })
          return res.sendStatus(204)
        } catch (error) {
          return res.sendStatus(500)
        }
      }

  async updateBar(req, res, next){
    try{
        const {id} = req.params
        const {name, pictureMain, picture_1, picture_2, description, description_2, rating, address, city, latitude_N, longitude_E} = req.body
        await Bars.update(
            {name, pictureMain, picture_1, picture_2, description, description_2, rating, address, city, latitude_N, longitude_E },
            { where: {id}}
        )
        return res.json(req.body)
    } catch (e) {
        next(ApiError.badRequest(e.message))
    }
}
}


module.exports = new BarController()