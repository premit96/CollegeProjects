var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
    
    
var todoRoutes = require('./routes/todos');

const path = require('path');
app.use(express.static(path.resolve(__dirname, '../todos_frontend/build'))); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
   res.sendFile("index.html");
});

//use the api routers
app.use('/api/todos', todoRoutes);

app.get("*", function(req, res){
    res.send("Sorry, page not found..");
});

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})