const controller = require('../controllers/users.js')
const router  =  require('express').Router()

//CRUD routes
router
  .get('/', controller.getAll)
  .get('/:id', controller.getOne)
  .post('/', controller.createOne)
  .put('/:id', controller.updateOne)
  .delete('/:id', controller.deleteOne)

  module.exports = router