const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bjyazuug6c5oskuh7jwy-mysql.services.clever-cloud.com',
  user: 'uqs7pyne3przlub1',
  password: 'b86T7mnED2glWjByiTws',
  database: 'bjyazuug6c5oskuh7jwy',
});

module.exports = pool.promise();