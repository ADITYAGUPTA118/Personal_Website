const express=require('express');
const app=express();

app.get('/',function(req,res){
     res.sendFile(__dirname + '/index.html');
});
app.get('/index.html',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/achievements.html',function(req,res){
    res.sendFile(__dirname + '/achievements.html');
});

app.get('/projects.html',function(req,res){
    res.sendFile(__dirname + '/projects.html');
});

app.get('/reachout.html',function(req,res){
    res.sendFile(__dirname + '/reachout.html');
});
app.get('/aboutme.html',function(req,res){
    res.sendFile(__dirname + '/aboutme.html');
});


app.listen(3000, function () {
     console.log('Server started on port 3000');
});