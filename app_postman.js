// Import important package
const express = require('express')
const app = express()
app.use(express.json()) // middleware which will help to read json data



const notes = [] // an empty array which will help to create json data

/* In this section you can see some example for sending HTTP request 
 with REST api  using postman

*/

//POST notes
app.post('/notes', (req, res) => {
    notes.push(req.body)
    res.status(201).json({
        message: "Succesfully create"
        
    })
})
//GET notes

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "succesfully read",
        notes:notes
    })
})

//DELETE notes

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    delete notes[id]
    res.status(200).json({
        message:"note deleted succusfully"
    })
})
// UPDATE notes
app.patch('/notes/:id', (req, res) => {
    const id = req.params.id
    const description = req.body.description
    const title = req.body.title
    notes[id].title = title
    notes[id].description = description
    res.status(200).json({
        message:"Note updated"
    })
})

module.exports = app // this module.exports = app will help to export app file
