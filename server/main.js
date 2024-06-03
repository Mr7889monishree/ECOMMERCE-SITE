const express=require('express')
const dotenv=require('dotenv').config()
const app=express();
const cors=require('cors');
const PORT=process.env.PORT||3500;
const {mongoose}=require('mongoose')
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000',
}))
app.use(express.json())
app.use('/',require('./routes/authRouter'))
app.use('/register',require('./routes/authRouter'))
app.use('/login',require('./routes/authRouter'))

app.listen(PORT,(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(`the server is running on port no :${PORT}`);
    }
})
mongoose.connect(process.env.MONGO_URL ,  { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("database is connected")
}).catch((error)=>{ console.log("database is not connected ")})