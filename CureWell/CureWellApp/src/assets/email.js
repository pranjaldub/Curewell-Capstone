// JavaScript source code
function mymethod() {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alakshendrasharma65@gmail.com',
      pass: '123456789alakshendra'
    }
  });

  var mailOptions = {
    from: 'alakshendrasharma65@gmail.com',
    to: 'alakshendra.sharma@yahoo.in',
    subject: 'Sending Email using Node.js',
    text: `hello system generated mail`
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

