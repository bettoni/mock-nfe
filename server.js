var soap = require('soap-server');
var wsDistribuicao = require('./WsNFeDistribuicaoDFe');

var soapServer = new soap.SoapServer();
var wsNFeDistribuicaoDFe = new wsDistribuicao();
var soapService = soapServer.addService(wsNFeDistribuicaoDFe.serviceName, wsNFeDistribuicaoDFe);
wsNFeDistribuicaoDFe.configureInputType(soapService);

soapServer.listen(1337, '127.0.0.1');
console.log("Iniciado na porta 1337");
