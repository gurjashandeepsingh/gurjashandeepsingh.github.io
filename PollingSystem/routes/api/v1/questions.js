
const express=require('express')
const Router=express.Router()
const question_controller=require('../../../controller/QuestionsController')

Router.post('/create',question_controller.createQuestions)
Router.get('/view/:id',question_controller.showQuestionDetails)
Router.delete('/delete/:id',question_controller.deleteQuestion)


module.exports=Router