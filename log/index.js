'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
var body_parser = require('body-parser').json();

const PORT = 3003;
const HOST = 'localhost';

app.get('/', function(req, res) {
    res.send("Servidor de Logs")
});

app.post('/log',body_parser,function(req, res){

    var descripcion = req.body.descripcion;
    var fecha = new Date();
    var line = "log:"+descripcion + " "+fecha + "\n"
    var logger = fs.createWriteStream('server.log', {
        flags: 'a'
    })
    logger.write(line)
    logger.end()
    res.send("OK")
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);