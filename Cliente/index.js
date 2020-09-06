//Librerias a usar
'use strict';
const express = require('express');
const app = express();
const axios = require("axios")
var body_parser = require('body-parser').json();
//puerto y ruta
const PORT = 3000;
const HOST = 'localhost';

app.get('/', function(req, res) {
    res.send("Servidor Cliente")
});
//url para obtener una orden
app.get('/getorder', function(req,res){
    var num = Math.floor(Math.random() * (1000-1)+1)
    var descripcion = "Se creo una orden con id:"+num
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    axios.post('http://localhost:3004/restaurante/postorder',{'id':num})
    res.json({'id':num})    
})

app.get('/getstateorder',body_parser,function(req,res){
    var order = req.body.id
    var descripcion = "Se desea saber el estado de orden:"+order
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    axios.get('http://localhost:3004/restaurante/getstate/'+order)
        .then(function(response){
            res.send(response['data'])
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            res.send("finish")
        });
});

app.get('/getstatedelivery',body_parser,function(req,res){
    var order = req.body.id
    var descripcion = "Se desea saber el estado de envio de orden:"+order
    axios.post('http://localhost:3004/log/post',{'descripcion':descripcion})
    axios.get('http://localhost:3004/repartidor/getstate/'+order)
    .then(function(response){
        res.send(response['data'])
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);