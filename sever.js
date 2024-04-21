const express=require("express");
const nodemon=require("nodemon");
const nodeMailer=require("nodemailer");
const session=require("express-session");
const { dirname } = require("path");
const path=require("path");
const env=require("dotenv");
const { constrainedMemory } = require("process");
const { error, info } = require("console");
const passport=require("passport").config;
const bodyParser = require("body-parser");

const app=express();
const PORT=process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`My is running on port ${PORT}`);
})

app.use(express.static('img'));
app.use(express.urlencoded({extended:true}));

app.get("/style1.css", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'style1.css'));
})
app.get("/style2.css", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'style2.css'));
})
app.get("/style3.css", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'style3.css'));
})
app.get("/script1.js", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'script1.js'));
})
app.get("/script2.js", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'script2.js'));
})
app.get("/script3.js", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'script3.js'));
})
app.get("/", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get("/dashboard.html", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'dashboard.html'));
})
app.get("/signUp.html", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'signUp.html'));
})
app.get("/verification.html", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'verification.html'));
})
app.get("/img/68804436174d4a57a8fe2bd5a74fccf9.jpeg", (_req, res)=>{
    res.sendFile(path.join(__dirname, 'img/68804436174d4a57a8fe2bd5a74fccf9.jpeg'));
})
app.get("/img/969c4c5f0a0b40b0b63420f5d1389a38.jpeg", (_req,res)=>{
    res.sendFile(path.join(__dirname, 'img/969c4c5f0a0b40b0b63420f5d1389a38.jpeg'));
})
app.get("/img/Vidash-photo.jpg",(_req,res)=>{
    res.sendFile(path.join(__dirname, 'img/Vidash-photo.jpg'));
})
app.get("/img/PhotoRoom-20230406_112623.jpg",(_req,res)=>{
    res.sendFile(path.join(__dirname, 'img/PhotoRoom-20230406_112623.jpg'));
})
app.get("/img/Jerry-photo.jpg",(_req,res)=>{
    res.sendFile(path.join(__dirname, 'img/Jerry-photo.jpg'));
})
app.get('/toggler.html',(_req,res)=>{
    res.sendFile(path.join(__dirname,'toggler.html'));
})
app.get('/favicon.ico',(_req,res)=>{
    res.sendFile(path.join,(__dirname, 'favicon.ico'));
})
function generateOTP(){
    return Math.floor(Math.random() * 900000 + 100000);
}


app.post("/signUp.html",async(_req,res)=>{
    const data ={
        name:_req.body.name,
        email:_req.body.email,
        password:_req.body.password
    }

    console.log("user's details", _req.body);

    const user=[email]
    const transporter=nodeMailer.createTransport({
        service: 'gmail',
        auth:{
            user:process.env.GMAIL_USER,
            pass:process.env.GMAIL_PASSWORD
        }
    })
    const mailOptions={
        from:process.env.GMAIL_USER,
        to:'email',
        subject:'Your signUp Details',
        html:"Your signUp detail"
    }
    
})