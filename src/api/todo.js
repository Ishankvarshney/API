const express = require('express');
const {Todo} = require('../model/Todo');


const todoRouter = express.Router();

todoRouter.get("/todos", async (req, res) => {
    const todos = await Todo.find();   // Select * from Todo;
    if (todos.length <= 0)
        return res.status(500).send({error : "There is something wrong."});

    return res.status(200).send(todos);
})

todoRouter.post("/todo", async (req, res)=> {
    const todo = req.body;
    const oldTodo = await Todo.findOne({id: todo.id}); // select * from todo where id= 

    if (oldTodo != null && oldTodo.length > 0)
        return res.status(500).send({error: "There is an old todo with same id."});

    const newTodo = new Todo(todo);
    await newTodo.save();
    return res.status(200).send(newTodo);
})

module.exports = {todoRouter};


