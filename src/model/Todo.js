const mongoose = require('mongoose')


const schema  = mongoose.Schema({
    id: String,
    todo: String,
})

const Todo = mongoose.model('Todo', schema);
module.exports = {Todo};