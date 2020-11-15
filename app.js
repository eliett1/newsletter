const express = require ("express");
const {dirname} = require ("path");
const app = express ();

app.get ("/", function (req, res){
    res.sendFile(__dirname + "/views/index.html")
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/' + req.url);
  });

app.listen (3000, function () {
    console.log ("Puedes ingresar al https://localhost:3000")
});

