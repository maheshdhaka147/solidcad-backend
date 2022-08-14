module.exports = (data) => {

    const nodemailer = require('nodemailer');

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2816a87ca977c2",
          pass: "5c570d81a01b61"
        }
    });

    const mailOptions = {
        from: data.email, // Sender Email
        to: 'maheshdhaka147@gmail.com', // Recipients Email
        subject: `Contact Us Request From ${data.firstName} ${data.lastName}`, // Subject
        text: `FirstName: ${data.firstName}, LastName: ${data.lastName}, Email: ${data.email}, Message: ${data.message}`, // Body
        html: `<p>FirstName: ${data.firstName}</p>
               <p>LastName: ${data.lastName}</p>
               <p>Email: ${data.email}</p>\
               <p>Message: ${data.message}</p>`
       };

    transport.sendMail(mailOptions, function(err, info) {
        if (err) {
        console.log(err)
        } else {
        console.log(info);
        }
    });
    
}
