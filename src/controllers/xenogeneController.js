let xenogeneModel = require("../models/xenogeneModel");

    function registrar(req,res){
     let nome = req.body.nomeServer;
     let id = req.body.idUsuarioServer;
     let efi = req.body.eficienciaServer;
     let com = req.body.complexidadeServer;
     let arq = req.body.tipoServer
     let dec = req.body.descricaoServer;
     console.log(dec);
     xenogeneModel.registrar(nome,id,efi,com,arq,dec)
    }


module.exports = {
    registrar
}