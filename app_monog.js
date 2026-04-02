// Import important package
const express = require('express')
const app = express()
const noteModel = require('./models/note.model')
app.use(express.json()) // middleware which will help to read json data



app.post('/notes', async(req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message:"Note Created"
    })
})

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "Note fetch succesfully",
        notes:notes
    })
})

app.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message:"Note deleted succesfully"
    })
})

app.patch('/notes/:id', async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body
    await noteModel.findOneAndUpdate({
        _id: id,
    }, {
        title: title,
        description: description
        
    })
    res.status(200).json({
        message:"Note updated",

    })
})


module.exports = app // this module.exports = app will help to export app file
