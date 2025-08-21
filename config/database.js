const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'bjyazuug6c5oskuh7jwy-mysql.services.clever-cloud.com',
  user: 'uqs7pyne3przlub1',
  password: 'b86T7mnED2glWjByiTws',
  database: 'bjyazuug6c5oskuh7jwy',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  dateStrings: true,
    // Si Clever Cloud requiere SSL:
    ssl: { rejectUnauthorized: false }
});

module.exports = pool.promise();