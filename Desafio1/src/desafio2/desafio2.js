"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["atriz"] = 0] = "atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
    profissao[profissao["gerente"] = 2] = "gerente";
})(profissao || (profissao = {}));
let Maria = {
    nome: "maria",
    idade: 29,
    profissao: profissao.atriz
};
let Roberto = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
};
let Laura = {
    nome: "laura",
    idade: 32,
    profissao: profissao.gerente
};
let Carlos = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
