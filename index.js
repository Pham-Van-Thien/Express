var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');

var app = express();
var port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(reg,res){
  res.render('index',{
  	name: 'Thien'
  });
});

app.use('/users',userRoute);
	
app.listen(port,function(){
	console.log('server listening on port' + port);
})