const Question=require('../models/questions')
const Option=require('../models/options')

module.exports.createQuestions=async function(req,res){
//  in this the question are created
    console.log(req.body.options);
    await Question.create(req.body,function(err,question){
            if(err){console.log("error in creating the question schema",err);}
            console.log('success')
        res.send(question);
})
}

module.exports.showQuestionDetails=async function(req,res){
        console.log(req.params.id)

        const question=await Question.findById(req.params.id).populate('options')
        

        if(question){
            res.send(question);
        }
        // handling the bad requests if that id does not exist
        else{
            res.send("id does not exits");
        }

    

    // in this the details about the question is displayed
}

module.exports.deleteQuestion=async function(req,res){
    // in this the question will be deleted
    //important thing to note in this we can't simply delete the question for this firstly we have to delete the all options of the question and the delete the question itself
        const question= await Question.findById(req.params.id).clone().catch(function(err){ console.log(err)})
        if(question){
            // delete all the option ⁉️ of the option db having the question id as the req.params.id
            await Question.deleteOne(req.params.id).clone().catch(function(err){ console.log(err)})
            // deleting all the option of that question
            await Option.deleteMany({question:req.params.id}).clone().catch(function(err){ console.log(err)})
                res.send("question deleted");
    
        }
        //  if th at question of the given id does not exists then just sending a message
        else{
            res.send('question does not exists')
        }
}
