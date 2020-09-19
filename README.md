# SA-Practica6
Practica #6 de Software Avanzado

## Descripcion
* Realizar una aplicación SOA para simular un servicio de crowdsourcing de comida a domicilio.
* 3 microservicios (no hace falta que tengan bases de datos):
* * * Cliente
* * * * Solicitar pedido al restaurante
* * * * Verificar estado del pedido al restaurante
* * * * Verificar estado del pedido al repartidor
* * * Restaurante
* * * * Recibir pedido del cliente
* * * * Informar estado del pedido al cliente
* * * * Avisar al repartidor que ya está listo el pedido
* * * Repartidor
* * * * Recibir pedido del restaurante
* * * * Informar estado del pedido al cliente
* * * * Marcar como entregado

## Requisitos
* Node js

## Librerias

```
npm i express
npm i fs
npm i body-parser
npm i axios
npm i chai
npm i chai-http
npm i mocha
npm i nyc --save-dev
```

## Ejecucion
```
node Cliente/index.js
node Restaurante/index.js
node Repartidor/index.js
node log/index.js
node ESB/orquestador.js
```

## Pruebas
```
ng test
```

## Colaborador

* Carlos Andree Avalos Soto 201408580

## Videos Demostrativos
* [Practica 4-Explicacion de Orquestador](https://drive.google.com/file/d/1F3gX7wZ6hglRYXTitLQyNJZJpu-getno/view)
* [Practica 6-Coverage](https://drive.google.com/file/d/1_z8JqL3jlfsR0DwsPn6TQGeNfMrlcBLM/view)
