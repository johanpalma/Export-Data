require('dotenv').config();
const nodemailer = require('nodemailer');

module.exports = function Email(data) {
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.PASSWORD,
        pass: process.env.EMAIL
    }
});

let mailOptions = {
    from: 'marciandrive@gmail.com',
    to: 'jpalma@lean-tech.io',
    subject: 'Link upload excel to drive',
    text: `Link upload excel ${data}`
}

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log('Error occurs');
    } else {
        console.log('Email sent!!!!')
    }
});
}