let mysql = require('mysql2');

let conexao = ({
    host: "localhost",
    user: "api",
    password: "Casa457457@",
    database: "api",
    port: "3306"
});

function comandoSQL(sqlStatment){
    console.log("Aplicando a query...")
    return new Promise(function (resolve, reject) {
        var con = mysql.createConnection(conexao);
        con.connect();
        con.query(sqlStatment, function (erro, resultados) {
            con.end();
            if (erro) {
                reject(erro);
            }
            console.log(resultados);
            resolve(resultados);
        });
        con.on('error', function (erro) {
            return ("ERRO NO MySQL SERVER: ", erro.sqlMessage);
        });
    });


};

module.exports = {
     comandoSQL
};