var WsNFeDistribuicaoDFe = function(){};
function nfeDistDFeInteresse(){
  nfeDadosMsg = {};
}

var serviceName = "NFeDistribuicaoDFe";
var service = function(nfeDistDFeInteresse){
    return nfeDistDFeInteresse.nfeDadosMsg + '[' + nfeDistDFeInteresse.nfeDadosMsg + ']';
};

var configureInputType = function(soapService){
  var operacao = soapService.getOperation(serviceName);
  operacao.setInputType('nfeDistDFeInteresse', nfeDistDFeInteresse);
};

WsNFeDistribuicaoDFe.prototype.NFeDistribuicaoDFe = service;
WsNFeDistribuicaoDFe.prototype.NFeDistribuicaoDFe.serviceName = serviceName;
WsNFeDistribuicaoDFe.prototype.configureInputType = configureInputType;

module.exports = WsNFeDistribuicaoDFe;
