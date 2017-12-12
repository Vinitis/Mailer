class Application {
  constructor(){
    let scheduleModule = require("./scheduleManager.js")

    this.scheduleManager = new scheduleModule();
    this.scheduleManager.openDB();
    //this.scheduleManager.add("twomeaningsof@gmail.com", "Im very happy",new Date()); //(mail, content, date)
    this.scheduleManager.get(); //get all scheduled messages from Schedule table in Sqlite database, no outdated ones
    this.scheduleManager.getAllAfterDate(new Date()); //get particular scheduled message from Schedule table in Sqlite database,it is needed to put this template (year, month, day, h, min, sec, ms)
    this.scheduleManager.closeDB();

    console.log(scheduleModule)
  };
};

new Application();
