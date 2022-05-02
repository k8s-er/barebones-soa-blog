const express = require('express')
const {randomBytes} =require('crypto')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
    const {type, data} = req.body;

    if (type === 'CommentCreated') {
        const {id, content, postId} = data
        const status = data.content.includes('orange') ? 'rejected' : 'approved'
        const post = posts[postId]
        post.comments.push({
            id,
            content,
        }) 
    }
})


app.listen(4003, () => {
    console.log('Moderation service listening on 4003')
})