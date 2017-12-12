const sqlite3 = require("sqlite3").verbose();


class Schedule {
  openDB(){
    this.SQLinstance = new sqlite3.Database("db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
      if (err) {
        return console.error(err.message);
    }
      console.log('Connected to the in-memory SQlite database.');
  });
}
  closeDB(){
    this.SQLinstance.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    })
}

  add(mail, content, date){
       this.SQLinstance.serialize(() => {
        //this.SQLinstance.run("CREATE TABLE lorem (mail TEXT, content TEXT, date TEXT)");
        this.SQLinstance.run("INSERT INTO lorem VALUES (?, ?, ?)", mail, content, date);
      });

  }

  get(){
    this.SQLinstance.serialize(() => {
      this.SQLinstance.each("SELECT * FROM lorem", (err, row) =>{
        if (parseFloat(row.date) > Date.now()){
          console.log(row);
        }
      });
    });
}

  getAllAfterDate(date){
    this.SQLinstance.serialize(() =>{
      this.SQLinstance.each("SELECT * FROM lorem", (err, row) =>{
        if (parseFloat(row.date) > date){
          console.log(row)
        }
      })
    })
  };

} //end

module.exports = Schedule;
