var Tem2 = require('../model/tem2');
var sequelize = require('../model/database.js');

const controllers = {}
sequelize.sync();


//ADICIONAR ATRASO
controllers.adicionaatraso = async(req, res) =>{
    const { id,atrasoId } = req.body;
    const data = await Tem2.create({
        marcacaoId: id,
        atrasoId: atrasoId
    })
    .then(function(data){
        return data;
    })
    .catch(error=>{
        console.log("Erro:" +error)
        return error;
    })
    res.status(200).json({
        success: true,
        message: "Atraso adicionado a marcação com sucesso",
        data: data
    });
}
module.exports = controllers;