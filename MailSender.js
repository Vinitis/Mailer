
const nodemailer = require('nodemailer');

class SendMail{
  constructor(){
    this.transporter = nodemailer.createTransport({
        host: 'mymail20182017@gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'mymail20182017@gmail.com',
            pass: 'mypassword2018'
        }

    });

  }

send(mailList,content,subject){

    this.mailOptions = {
        from: '<mymail20182017@gmail.com>',
        to: 'mpodlaszczyk@gmail.com',
        subject: subject,
        text: 'text',
        html: content
    };

nodemailer.createTestAccount((err, account) => {
    this.transporter.sendMail(this.mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
});
}
}
module.exports= SendMail;
