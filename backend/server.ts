import express from 'express'
import 'dotenv/config' 
const app=express()

app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next()
  
})

app.get('/', (req, res) => {
    res.json({message:'welcome to the app'});
  });


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });