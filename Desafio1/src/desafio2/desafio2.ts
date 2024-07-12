interface person{
    nome: string,
    idade: number,
    profissao?: profissao
}
enum profissao{
    atriz,
    Padeiro,
    gerente
}


let Maria : person ={
    nome :"maria",
    idade : 29,
    profissao: profissao.atriz
}


let Roberto: person = {
    nome :"roberto",
    idade: 19,
    profissao:profissao.Padeiro
}
let Laura:person = {
    nome: "laura",
    idade: 32,
    profissao: profissao.gerente
};

let Carlos:person = {
    nome: "carlos",
    idade: 19,
    profissao:profissao.Padeiro
}