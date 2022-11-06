const express = require('express');
const mongoose = require('mongoose');
const loginDetalis = require('./Schema/Structure');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017').then(() => console.log('DB connected')
).catch((err) => console.log(err.message));

app.post('/login',async(req,res) => {
    const {email,password} = req.body;
   // if(!email || !password) return res.send("email or password incorrect");
  const userDb = await loginDetalis.findOne({email});
  if(userDb) {
    return res.send("user already exits");
  }
  else{
    const newUser =  await loginDetalis.create({email,password})
     
     
  } 

  
  
});


app.get('/getdetalis', async(req,res) => {
    const data =  await loginDetalis.find();
    return res.json(data)
})


app.listen(8080,() => console.log('server is running...'));