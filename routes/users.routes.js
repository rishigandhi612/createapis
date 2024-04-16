const express = require('express')
const router = express.Router();



let users = [
    {"name":'s1',"age":10, id:1}, 
    {"name":'s2',"age":20,id:2}, 
    {"name":'s3',"age":30,id:3}, 
    {"name":'s4',"age":40,id:4}, 
    {"name":'s5',"age":50,id:5},
]
router.get('/', (req,res)=>{
    res.send('Server is running on port 3000')
})
router.get('/users', (req,res)=>{
    res.send({
        success: true,
        data: users 
    })
})

router.post('/users', (req,res)=>{
 
    let datatoadd = req.body
    console.log(datatoadd)
    users.unshift(datatoadd)

    res.send({
        success: true,
        Message: 'User added successfully',
        data:users
    })
})
router.put('/users/:id', (req,res)=>{
    let datatoupdate = req.body
    let id = req.params.id

    users.forEach(user=>{
        if(user.id==id){
            user.name = datatoupdate.name
            user.age = datatoupdate.age
        }
    }
       )
    res.send({
        success: true,
        Message: 'User updated successfully with id' + req.params.id,
        data: users
    })
})

router.delete('/users/:id', (req,res)=>{

    let uid = req.params.id

    let idx = users.findIndex(user=>user.id==uid)
    users.splice(idx,1)
    res.send({
        success: true,
        Message: 'User Deleted successfully with id' + req.params.id,
        data: users
    })
})

module.exports=router