let chai = require('chai');
let chaiHttp = require('chai-http')
const expect = require('chai').expect

chai.use(chaiHttp)
const url = "http://localhost:3000"

describe('Obtener una orden',()=>{
    it('Deberia generar una orden y regresarla',(done)=>{
        chai.request(url)
        .get('/getorder')
        .end(function(err, res){
            expect(isNaN(res.body.id)).to.be.false
            expect(res).to.have.status(200);
            done();
        });
    });
    it('Deberia obtener el estado de la orden 0',(done)=>{
        chai.request(url)
        .get('/getstateorder')
        .send({id: 0})
        .end(function(err, res){
            expect(isNaN(res.text)).to.be.true
            expect(res).to.have.status(200);
            done();
        });
    });
    it('Deberia ontener el estado de envio de orden 0',(done)=>{
        chai.request(url)
        .get('/getstatedelivery')
        .send({id:0})
        .end(function(err, res){
            expect(isNaN(res.text)).to.be.true
            expect(res).to.have.status(200);
            done();
        });
    });

});