const express=require('express')
const path=require('path')
const bodyparser=require("body-parser")
// const fs=require('fs')
const app=express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Sp', { useNewUrlParser:true});

const port=80 

//mongoose schema
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    contact: String,
    password: String
  });
  
var User = mongoose.model('Users', UserSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res)=>{
    // console.log(req.body)
    var mydata= new User(req.body);
    mydata.save().then(()=>{
        res.send("data tranfser")
    }).catch(()=>{
       res.status(400).send("not tranfser")
    })

    // res.status(200).render('contact.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});