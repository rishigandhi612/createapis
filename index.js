const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

const usersRoute = require('./routes/users.routes') 
app.use('/',usersRoute)
app.listen(3000, ()=> console.log('Server is running on port 3000'))