let express = require("express");
var router = express.Router();

var xenogeneController = require("../controllers/xenogeneController");

router.post("/registrar", function (req, res){
    xenogeneController.registrar(req,res);
    console.log("Rota Xenogene")
});

module.exports = router;