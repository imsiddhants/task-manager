var domain = 'sandbox8f693d60d7a74a438933eeb1a391f824.mailgun.org';
var mailgun = require('mailgun-js')
({apiKey: process.env.API_KEY, domain: domain});
 
const sendWelcomeEmail = (email , name) =>{
  var data = {
    from:'taskmanager@gmail.com',
    to:email,
    subject: 'Welcome',
    text: `Welcome ,${name} to the task manager application`
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
  
}

const sendDeletionEmail = (email,name) => {
  var data = {
    from:'taskmanager@gmail.com',
    to:email,
    subject: 'Goodbye',
    text: `Bye ,${name} to the task manager application`
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
  
}

module.exports={
  sendWelcomeEmail,
  sendDeletionEmail
}