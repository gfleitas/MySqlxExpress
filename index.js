const  express = require('express');
const app = express();
var mysql = require('mysql');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
}));

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'pasantias2019',
    database : 'skill'
})

connection.connect();

app.get('/users', function(req, res){
    connection.query('SELECT * FROM users', function(error, result){

        if (error) throw error;

        res.send( result );
        console.log(result)
    })
})

app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!')
})