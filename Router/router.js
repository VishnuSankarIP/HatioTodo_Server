const express=require('express')
const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')
const jwtMiddleware =require('../Middlewares/jwtMiddleware')
const todoController=require('../Controller/todoController')
const router=new express.Router()



// Register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

// add-project
router.post('/add-project',jwtMiddleware,projectController.addProject)

// get user property

router.get('/get-project',jwtMiddleware,projectController.getAllProject)

// add-todo
router.post('/add-todo/:pid',jwtMiddleware,todoController.addTodos)


// edit-project-title
router.put('/edit-title/:pid',jwtMiddleware,projectController.editProjectTitle)

// get-todo
router.get('/get-todo/:pid', jwtMiddleware, todoController.getTodos)

// // remove-todo
router.delete('/remove-todo/:projectId/:todoId', jwtMiddleware, todoController.removeTodo);

module.exports=router 






