const express=require('express')
const Router=express.Router()
const optionsController=require('../../../controller/OptionsController');

Router.post('/:id/create',optionsController.createOption);
Router.get('/:id/add_vote',optionsController.add_vote);
Router.delete('/delete/:id',optionsController.deleteOption)

module.exports=Router