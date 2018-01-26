var sqlite3 = require('sqlite3').verbose();
var Table = require('cli-table');

function saveMailListIntoDB{
    let db  = new sqlite3.Database(':memory:');
    db.serialize(() => {
      db.run("CREATE TABLE SendedMessages (from TEXT, text TEXT, subject TEXT )");
    db.run("INSERT INTO SendedMessages VALUES (?, ?, ?, ?)", mail, content, subject);
      db.run("INSERT INTO SendedMessages VALUES (?, ?, ?)", "mail", "content", "subject");
    db.serialize(()=>{
    db.all("SELECT * FROM SendedMessages", (err, results)=>{
        console.log(results)
        this.show(results);
      })
    });
  };
  db.close();
  show(results){
  var table = new Table({ head: ["mail", "content", "subject"]});
  for (var i=0; i<results.length; i++){
    var mail=results[i].mail;
    var content=results[i].content;
    var date=results[i].subject;
    table.push([mail, content, subject]);
  }
  console.log(table.toString());
  }
}
module.exports = new saveMailListIntoDB();
