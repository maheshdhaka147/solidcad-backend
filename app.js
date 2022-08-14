const express = require("express");
const app = express();
const cors = require("cors");

const DataValidator = require("./models/DataValidation");
const EmailSender = require("./models/EmailSender");
const DataInsert = require("./models/DataInsert");

// Middlewares
app.use(cors());
app.use(express.json())

// Decide the port
const port = process.env.PORT || 8080;

app.post("/submit-contact-request",(req,res)=>{
    const data = req.body;

    const formSubmitFun = async () =>{
        // Validate Input 
        const validationResult =  await DataValidator(data);
        if(validationResult.error){
            res.status(400).send(validationResult.error);
        }else{
            // Send Email
            EmailSender(data);
            // Insert data in MongoDB
            const insertStatus = await DataInsert(data);
            if(insertStatus){
                res.status(201).send("Data submitted");
            }else{
                res.status(400).send("Database Error");
            }   
        }
    }
    formSubmitFun();
})

app.listen(port,()=>{
    console.log(`The server is listening at port: ${port}`,)
})


