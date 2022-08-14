module.exports = (data) => {
    const mongoose = require("mongoose");
    let Contact;

    const schema = new mongoose.Schema({
        firstName:String,
        lastName:String,
        email:String,
        message: String
    })

    if (mongoose.models.Contact) {
        Contact = mongoose.model('Contact');
    } else {
        Contact = mongoose.model('Contact', schema);
    }
    const dbUrl='mongodb://mongo:27017/contactrequests';
    return new Promise((resolve,reject)=>{
        mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology: true})
        .then(()=>{
        data = {
            "firstName":data.firstName,
            "lastName":data.lastName,
            "email":data.email,
            "message":data.message
        }
        const newContactRequest = new Contact(data);
        newContactRequest.save(function (err) {
        if (err) {
            reject(false)
        }else{
            resolve(true)
            }
        });
        }).catch(error=>{
            reject(false)
        })
    })

}



