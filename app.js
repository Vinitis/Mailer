 var argv = require('yargs').argv;

class Application{
  constructor(){

    console.log(argv);

    //Sending mails
    if(argv.send && argv.content && argv.subject){
      getMailListFromDB(argv.send, function (list){
          sendMail(list, argv.subject, argv.content, function (save){
            saveMailListIntoDB(save, argv.send, argv.content, argv.subject function (){
              console.log('Wysłano email!');
            }
          })
        })
      }


    //Seting mails shedule
    if(argv.mail && argv.content && argv.date){
      setMailSchedule(argv.mail, argv.content, argv.date, function() {
        console.log('Dodano email!');
        if (argv.date >= Date.now()) {
          sendMail(argv.mail, argv.content, function () {
              console.log('Wysłano email!');
          })
      }
      })
    }

      //Showing sended mail list
      if(argv.results){
        showSendedMailList();
      }
}


  getMailListFromDB(name, callback){

    //>>Function<<<

    callback(list);
  }
  sendMail(mail, content, subject, callback){

    //>>Function<<<
    let sendMail= require('./MailSender.js');
    callback(save);
  }
  saveMailListIntoDB(mail, content, subject, callback){

    //>>Function<<<

    callback();
  }
  setMailSchedule(mail, content, data, callback){

    //>>Function<<<

    callback();
  }
  showSendedMailList(name){

    //>>Function<<<

  }
}
//
new Application();
