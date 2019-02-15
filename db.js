var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    database : 'bd_notes'
});
module.exports=connection;