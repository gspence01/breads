//depedencies
const express = require('express')

//configuration
require('dotenv').config()
const app = express()

//MIDDLEWARE
app.set('views', __dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//routes
app.get('/', (req, res)=>{
    res.send('welcome to a cool app')
})

//breads
const breadsController = require("./controllers/breads_controller.js")
app.use('/breads', breadsController)

//404 Page
app.get('*', (req, res)=>{
    res.send('404')
})

//listen 
app.listen(process.env.PORT, ()=>{
    console.log('listening to port', process.env.PORT)
})