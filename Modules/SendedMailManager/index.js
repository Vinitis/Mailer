var sqlite3 = require('sqlite3').verbose();
var Table = require('cli-table');
class SendedMailManager{
    openDB(){
    this.SQLinstance = new sqlite3.Database(':memory:');
  };
  closeDB(){
    this.SQLinstance.close();
  };
  set(mail, content, date){
    this.SQLinstance.serialize(() => {
      this.SQLinstance.run("CREATE TABLE SendedMessages (mail TEXT, content TEXT, date TEXT)");
      this.SQLinstance.run("INSERT INTO SendedMessages VALUES (?, ?, ?)", mail, content, date);
      this.SQLinstance.run("INSERT INTO SendedMessages VALUES (?, ?, ?)", "mail", "content", "date");
    });
  }
  get(){
    this.SQLinstance.serialize(()=>{
      this.SQLinstance.all("SELECT * FROM SendedMessages", (err, results)=>{
        console.log(results)
        this.show(results);
      })
    });
  }
  show(results){
  var table = new Table({ head: ["mail", "content", "date"]});
  for (var i=0; i<results.length; i++){
    var mail=results[i].mail;
    var content=results[i].content;
    var date=results[i].date;
    table.push([mail, content, date]);
  }
  console.log(table.toString());
  }
}




module.exports = new SendedMailManager();
