'use strict';
const express = require('express');
const app = express();
const axios = require("axios");
var body_parser = require('body-parser').json();

const PORT = 3002;
const HOST = 'localhost';

app.get('/', function(req, res) {
    res.send("Servidor Repartidor")
});

app.post('/postorder',body_parser, function(req,res){
    var order = req.body.id
    var dm = req.body.deliveryman
    var descripcion = "Se recibio orden:"+order+" para repartidor:"+dm
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    res.send("OK")
});

app.get('/getorder/:order',body_parser, function(req, res){
    var order = req.params.order
    var descripcion = "Se recibio orden:"+order+" para saber su estado de envio"
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})

    var state = Math.floor(Math.random() * (2-1)+1)
    if(state==1){
        descripcion = "Orden:"+order+" en camino"
    }else{
        descripcion = "Orden:"+order+" entregada"
    }
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    res.send(descripcion)
});

app.post('/postdelivery',body_parser,function(req,res){
    var order = req.body.id
    var descripcion = "Se recibio orden:"+order+" para marcar como entregada"
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    res.send("OK")
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);