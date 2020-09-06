'use strict';
const express = require('express');
const app = express();
const axios = require("axios");
var body_parser = require('body-parser').json();

const PORT = 3001;
const HOST = 'localhost';

app.get('/', function(req, res) {
    res.send("Servidor Restaurante")
});

app.post('/postorder',body_parser, function(req,res){
    var order = req.body.id
    var descripcion = "Se recibio una orden con id:"+order
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    descripcion = "Se procedio a preparar orden:"+order
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    res.send("OK")
});

app.get('/getstate/:order',body_parser, function(req,res){
    var order = req.params.order
    var descripcion = "Se recibio orden:"+order +" para saber su estado"
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    var state = Math.floor(Math.random() * (3-1)+1)
    if(state==3){
        descripcion = "Orden:"+order+"  enviada"
    }else if(state == 2){
        descripcion = "Orden:"+order+" cancelada"
    }else{
        descripcion = "Orden:"+order+" en preparacion"
    }
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    res.send(descripcion)
});

app.post('/postdelivery',body_parser,function(req,res){
    var order = req.body.id
    var descripcion = "La orden:"+order+" esta lista para enviar"
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})

    var deliveryman = Math.floor(Math.random() * (500-1)+1)
    descripcion = "Repartidor:"+deliveryman+" repartira orden: "+order
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    axios.post('http://localhost:3004/repartidor/postorder',{'id':order, 'deliveryman':deliveryman})
    res.json({'deliveryman':deliveryman})
    
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);