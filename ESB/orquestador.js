//Librerias a usar
'use strict';
const express = require('express');
const app = express();
const axios = require("axios")
var body_parser = require('body-parser').json();

//puerto y ruta
const PORT = 3004;
const HOST = 'localhost';

app.get('/', function(req, res) {
    res.send("Orquestador de Servicios")
});
//CONEXION CON SERVIDOR CLIENTE
app.post('/restaurante/postorder',body_parser,function(req,res){
    var order = req.body.id
    axios.post('http://localhost:3001/postorder',{'id':order})
    res.send("OK")   
});
//CONEXION CON SERVIDOR CLIENTE
app.get('/restaurante/getstate/:order',body_parser, function(req,res){
    var order = req.params.order
    axios.get('http://localhost:3001/getstate/'+order)
        .then(function(response){
            res.send(response['data'])
        })
        .catch(function (error) {
            console.log(error);
            res.send("BAD")
        })
        .then(function () {
        });
});
//CONEXION CON SERVIDOR CLIENTE
app.get('/repartidor/getstate/:order',body_parser, function(req,res){
    var order = req.params.order
    axios.get('http://localhost:3002/getorder/'+order)
    .then(function(response){
        res.send(response['data'])
    });
});
//CONEXION CON SERVIDOR RESTAURANTE
app.post('/repartidor/postorder',body_parser,function(req,res){
    var order = req.body.id
    var dm = req.body.deliveryman
    axios.post('http://localhost:3002/postorder',{'id':order, 'deliveryman':dm})
    res.send("OK")
});

//CONEXION CON SERVIDOR LOG
app.post('/log/post',body_parser,function(req,res){
    var descripcion = req.body.descripcion
    axios.post('http://localhost:3003/log',{'descripcion':descripcion})
    res.send("OK")
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);