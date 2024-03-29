const TaskModel = require("../models/TaskModel");
 
// get-tasks
module.exports.getTasks =async (req, res) =>{
    const tasks =await TaskModel.find()
    res.send(tasks)
};

    //save- tasks
module.exports.saveTask = (req, res) =>{
    const {task} =req.body

    TaskModel.create({task})
    .then((data)=>{
        console.log("Saved Sucessfully....");
        res.status(201).send(data);
    })
    .catch((err) =>{
        console.log(err);
        res.send({error: err, msg:"Something went Wrong"});

    });
};
    // update-task
module.exports.updateTask = (req, res) =>{
    const{id}=req.params
    const {task} =req.body

    TaskModel.findByIdAndUpdate(id,{task})
    .then(()=> res.send("Updated Sucessfully"))
    .catch((err) =>{
        console.log(err);
        res.send({error: err, msg:"Something went Wrong"});

    });
};

    //delete-task

    module.exports.deleteTask = (req, res) =>{
        const{id}=req.params 
        TaskModel.findByIdAndDelete(id)
        .then(()=> res.send("Deleted Sucessfully"))
        .catch((err) =>{
            console.log(err);
            res.send({error: err, msg:"Something went Wrong"});
    
        });
    };