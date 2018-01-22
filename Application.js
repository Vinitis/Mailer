
//define main class
class Application{
  constructor(){
    let SendedMailManager = require('./Modules/SendedMailManager')
    SendedMailManager.openDB();
    SendedMailManager.set("kristina@wp.pl", "content", new Date());
    SendedMailManager.get();
    //SendedMailManager.show();
    SendedMailManager.closeDB();

    console.log(SendedMailManager)
  }
}

  //run it
new Application();
