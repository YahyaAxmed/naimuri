const { OPEN_READWRITE } = require('sqlite3');

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./naimuri.db', OPEN_READWRITE, (err) => {
    if (err){
        console.log(err.message);
    }
    console.log('Conneected');

    const sql = 'INSERT INTO user ("first_name", "last_name", "email", "password", "team_id") values (?,?,?,?,?)'
    db.run(sql,["Wilson", "admin", "wilson.admin@abc.com","12345678", 0], (err)=>{
        if (err){
            console.log(err.message);
        }
        console.log('new row has been created')
    })
    db.close((err)=>{
        if (err){
            console.log(err.message);
        }
        console.log('closed')
    });
})